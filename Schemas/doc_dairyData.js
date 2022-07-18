const mongoose = require('mongoose')

var today = new Date()

module.exports = mongoose.model('DairyReg', {
    "date":{type:Date},
    "type":{type:String},
    "etype":{type:String},
    "ehours":{type:String},
    "hours":{type:String},
    "milk":{type:Number},
    "snf":{type:Number},
    "fat":{type:Number},
    "good":{type:String},
    "rate":{type:Number},
    "totalRate":{type:Number},
    "dairyMilk":{type:Number},
    "dairyTotalRate":{type:Number},
    "salesTotalRate":{type:Number},
    "salesTotalMilk":{type:Number},
    "dairyRate":{type:Number},
    "extraMilk":{type:Number},
    "extraTotalRate":{type:Number},
    "extraRate":{type:Number},
    "from":{type:Date},
    "to":{type:Date},
    "generatedOn": { type: Date, default: today },
    "UId":{type:String}
});
