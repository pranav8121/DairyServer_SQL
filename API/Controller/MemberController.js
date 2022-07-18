const clsMember = require('../Model/clsMember');
const obj_Member = new clsMember();

exports.getAllMember = (req, res) => {

    obj_Member.getAllMember(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        })
};

exports.getMemberById = (req, res) => {
    obj_Member.getMemberById(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        })
};

exports.AddMember = (req, res) => {
    obj_Member.AddMember(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        })
};

exports.UpdateMemberPass = (req, res) => {
    obj_Member.UpdateMemberPass(req.body)
        .then((result) => {
            res.statusCode = 200;
            res.send(result);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            let responseObj = {};
            Object.assign(responseObj, { status: 'fail' }, { result: err });
            res.send(responseObj);
        })
};