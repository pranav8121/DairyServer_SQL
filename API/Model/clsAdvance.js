const date = require('date-and-time');
const collection = require("../../Schemas/doc_advance");

class clsAdvance {
    async getAdvance(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const data = {
                UId: req.UId,
                No: req.No,
                type: req.type
            };
            const doc = await collection.find(data);
            if (doc.length > 0) {
                Object.assign(obj_response, { status: 'success' }, { result: doc });
                return obj_response;
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "NA" });
                return obj_response;
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    async postAdvance(req) {
        try {
            let obj_response = {};
            let now = new Date();
            let today = date.format(now, 'DD-MM-YYYY');
            const data = {
                type: req.type,
                addAmount: req.addAmount,
                cutAmount: req.cutAmount,
                date: new Date(today).toISOString(),
                No: req.No,
                rate: req.rate,
                bag: req.bag,
                Name: req.Name,
                supType: req.supType,
                UId: req.UId
            };
            let createdData = await collection.create(data);
            if (Object.keys(createdData).length !== 0) {
                Object.assign(obj_response, { status: 'success' }, { result: "Data Added Successfully" });
                return obj_response;
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "NA" });
                return obj_response;
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    };
};

module.exports = clsAdvance;