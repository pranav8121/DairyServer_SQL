const mongoose = require('mongoose')

module.exports = mongoose.model('Credential', {
    username: { type: String },
    password: { type: String },
    Name: { type: String },
    multi: { type: Number },
    active: { type: Number },
    loginCounter: { type: Number },
    Host_Token1: { type: String },
    Host_Token2: { type: String },
});
