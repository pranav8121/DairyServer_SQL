const mongoose = require('mongoose')

module.exports = mongoose.model('Members', {
    Name: { type: String },
    engName:{ type: String },
    No: { type: Number },
    type: { type: String },
    Phone:{type:Number},
    UId:{type: String},
    password: { type: String },
    passwordChanged: { type: Number },
    active: { type: Number }
});