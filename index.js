const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db');
const cors = require('cors');
const app = express();
var server = require('http').Server(app);
const arrSocket = require('./API/arrSocket');
const WebSocketHandler = require('./API/WebSocket/controller/socketHandler');
var io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});
var connectionData = "1234";

const login = require('./API/Route/routelogin');
const member = require('./API/Route/routeMember');
const dailyData = require('./API/Route/routeDailyData');
const bill = require('./API/Route/routeBill');
const advance = require('./API/Route/routeAdvance');
const dairyData = require('./API/Route/routeDairyData');
const sales = require('./API/Route/routeSales');
const truncate = require('./API/Route/routeTruncate');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/API/Login', login);
app.use('/API/Member', member);
app.use('/API/DailyData', dailyData);
app.use('/API/Bill', bill);
app.use('/API/Advance', advance);
app.use('/API/Sales', sales);
app.use('/API/DairyData', dairyData);
app.use('/API/TruncateCollection',truncate)


io.on('connection', (socket) => {


    socket.on("doneEvent", (data) => {
        connectionData = data.token;
        if (data.msg == 'success') {
            if (!arrSocket.arrWebSocket.includes(connectionData) && connectionData !== "") {
                arrSocket.arrWebSocket.push(connectionData);
            }
        } else if (data.msg == 'user logout') {
            console.log(data.msg);
            arrSocket.arrWebSocket.splice(arrSocket.arrWebSocket.indexOf(connectionData), 1);
        }


        const arr = arrSocket.arrWebSocket
    });

    setInterval(() => {
        socket.emit('testEvent', "Connection is live");
    }, 1000);


    socket.on('disconnect', () => {
        arrSocket.arrWebSocket.splice(arrSocket.arrWebSocket.indexOf(connectionData), 1);
        WebSocketHandler.handleSocket(connectionData);

    });

});



server.listen(process.env.PORT || 3001, () => {
    console.log('server started at http://localhost:3001/')
});