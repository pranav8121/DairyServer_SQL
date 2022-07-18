const mongoose = require('mongoose')
var today = new Date()

module.exports = mongoose.model('Bill', {
    Name: { type: String },
    No: { type: Number },
    totalmilk: { type: Number },
    morTotalmilk: { type: Number },
    eveTotalmilk: { type: Number },
    totalRate: { type: Number },
    cutting: { type: Number },
    subAmount: { type: Number },
    mortotalRate: { type: Number },
    evetotalRate: { type: Number },
    adv: { type: Number },
    bank: { type: Number },
    supply: { type: Number },
    balance: { type: Number },
    inv_no: { type: String },
    from: { type: Date },
    to: { type: Date },
    generatedOn: { type: Date, default: today },
    UId: { type: String }

});