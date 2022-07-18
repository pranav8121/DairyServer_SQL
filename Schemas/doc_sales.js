const mongoose = require('mongoose')


module.exports = mongoose.model('Sales', {
    date: { type: Date },
    hours: { type: String },
    ehours: { type: String },
    type: { type: String },
    etype: { type: String },
    milk: { type: Number },
    rate: { type: Number },
    totalRate: { type: Number },
    UId:{ type: String }
});