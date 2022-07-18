const clsTruncate = require('../Model/clsTruncate');
const obj_data = new clsTruncate();


exports.truncateDailyData = (req, res) => {
    obj_data.truncateDailyData(req.body)
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