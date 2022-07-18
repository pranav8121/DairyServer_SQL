const arrSocket = require('../../arrSocket');
const clsLogin = require('../../Model/clsLogin')
const obj_Login = new clsLogin();

class WebSocketModel {
    handleSocket(data) {
        setTimeout(() => {
            const checkIfExist = arrSocket.arrWebSocket.filter(k => {
                return k == data
            });
            if (checkIfExist.length == 0) {
                let username = data.split('-')[2]
                let dataToSend = {
                    username: username,
                    token: data
                };
                obj_Login.logoutDairy(dataToSend).then(result => {
                    console.log(`User ${username} Logout Due to browser closed => ${result.result}` );
                }).catch(err => {
                    console.log(err);
                });
            };
        }, 20000);
    };
};
module.exports = WebSocketModel;