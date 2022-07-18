const date = require('date-and-time');
const doc_dailyData = require("../../Schemas/doc_dailyData");

class clsTruncate {
    async truncateDailyData(req) {
        try {
            let obj_response = {};
            let id = req.id;
            let pass = req.pass;
            if (id == "admin" && pass == "8121") {
                const data = await doc_dailyData.remove({});
                Object.assign(obj_response, { status: 'success' }, { result: "Truncated SuccesFully!!" });
                return obj_response;
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "Wrong Credential!!" });
                return obj_response;
            };
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}


module.exports = clsTruncate;