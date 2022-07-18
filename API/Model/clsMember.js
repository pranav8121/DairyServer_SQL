const date = require('date-and-time');
const collection = require("../../Schemas/doc_member");

class Member {
    async getAllMember(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const UId = req.UId
            const a = await collection.find({ UId: UId });
            if (a.length > 0) {
                Object.assign(obj_response, { status: 'success' }, { result: a });
                return obj_response;
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "NA" });
                return obj_response;
            }
        } catch (err) {
            console.log(err);
            return err;
        };
    }

    async getMemberById(no, UId) {
        try {
            let obj_response = {};
            let now = new Date();
            const a = await collection.find({ No: no, UId: UId });
            if (a.length > 0) {
                Object.assign(obj_response, { status: 'success' }, { result: "User Found" }, { detail: a });
                return obj_response;
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "User Not Found" });
                return obj_response;
            }
        } catch (err) {
            console.log(err);
            return err;
        };
    }

    async AddMember(req) {
        try {
            let obj_response = {};
            let now = new Date();
            let ifExist = await this.getMemberById(req.No, req.UId);
            if (ifExist.result == 'User Found') {
                Object.assign(obj_response, { status: 'success' }, { result: 'Member Number Already Exist' });
                return obj_response;
            }
            else {
                let firstName = req.engName.split(' ')[0].toLowerCase();
                const newPass = `${firstName}${req.No}`
                let dataToSave = {
                    Name: req.Name,
                    engName: req.engName,
                    No: req.No,
                    type: req.type,
                    Phone: req.Phone,
                    UId: req.UId,
                    password: newPass,
                    passwordChanged: 0,
                    active: 0
                };
                const createdData = await collection.create(dataToSave)
                if (Object.keys(createdData).length !== 0) {
                    Object.assign(obj_response, { status: 'success' }, { result: 'Member Added Succesfully' }, { detail: createdData });
                    return obj_response;
                }
                else {
                    Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                    return obj_response
                }
            }
        } catch (err) {
            console.log(err);
            return err;
        };
    }

    async UpdateMemberPass(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const update = await collection.updateOne({ No: req.No, UId: req.UId }, { $set: { password: req.password, passwordChanged: 1 } });
            if (update.modifiedCount == 1) {
                Object.assign(obj_response, { status: 'success' }, { result: "Password Changed Successfully" })
                return obj_response
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                return obj_response
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};

module.exports = Member;