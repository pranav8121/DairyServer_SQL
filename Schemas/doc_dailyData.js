const mongoose = require('mongoose')


module.exports = mongoose.model('Data', {
    Name: { type: String },
    No:{type:Number},
    date: { type: Date },
    time: { type: String },
    milk: { type: Number },
    fat: { type: Number },
    snf: { type: Number },
    rate: { type: Number },
    t_rate: { type: Number },
    hour:{type:String},
    type:{type:String},
    UId:{type:String}
});