var SocketModel = require('../model/socketHandlerModel');
var objSocketModel = new SocketModel();
exports.handleSocket = (connectionData) => {
    objSocketModel.handleSocket(connectionData);
 };