const clsDailyData = require('../Model/clsDailyData');
const obj_dailyData = new clsDailyData();

exports.getTodayData = (req, res) => {
    obj_dailyData.getTodayData(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        });
};

exports.postData = (req, res) => {
    obj_dailyData.postData(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        });
};

exports.getBill = (req, res) => {
    obj_dailyData.getBill(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        });
}