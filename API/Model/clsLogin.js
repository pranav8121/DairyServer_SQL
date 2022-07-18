const date = require('date-and-time');
const collection = require("../../Schemas/doc_login");
const memCollection = require("../../Schemas/doc_member");

class Login {
    // Dairy Auth
    async getallDairyCred() {
        try {
            let obj_response = {};
            let now = new Date();
            const a = await collection.find({})
            Object.assign(obj_response, { status: 'success' }, { result: a })
            return obj_response
        }
        catch (err) {
            console.log(err);
            return err
        }
    }

    async browserClosed() {
        try {
            console.log("User Closed The Browser");
        } catch (err) {
            return err
        }
    }

    async AuthDairy(req) {
        try {
            let obj_response = {};
            let now = new Date();

            const doc = await collection.find({ 'username': req.username })
            if (doc.length == 0) {
                Object.assign(obj_response, { status: 'success' }, { result: "Username does not exist" })
                return obj_response
            }
            else {
                const data = doc[0]
                if (req.password == data.password) {
                    if (data.active < 2) {
                        const loginCounter = data.loginCounter + 1
                        const val = data.active + 1
                        let token = `${data._id}-${loginCounter}-${data.username}`
                        let update;
                        if (data.active == 0) {
                            update = await collection.updateOne({ username: data.username }, { $set: { active: val, Host_Token1: token, loginCounter: loginCounter } });
                        }
                        else if (data.active == 1) {
                            update = await collection.updateOne({ username: data.username }, { $set: { active: val, Host_Token2: token, loginCounter: loginCounter } });
                        }
                        if (update.modifiedCount == 1) {
                            Object.assign(obj_response, { status: 'success' }, { result: "Login SuccessFull" }, { details: data }, { token: token })
                            return obj_response
                        }
                        else {
                            Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                            return obj_response
                        }
                    }
                    else {
                        Object.assign(obj_response, { status: 'success' }, { result: "User Already Active" })
                        return obj_response
                    }
                }
                else {
                    Object.assign(obj_response, { status: 'success' }, { result: "Invalid Username or password" })
                    return obj_response
                }
            }
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async CreateAuthDairy(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const doc = await collection.find({ 'username': req.username })
            if (doc.length == 0) {
                Object.assign(obj_response, { status: 'success' }, { result: "Username Already not exist" })
                return obj_response
            } else {
                let data = {
                    username: req.username,
                    password: req.password,
                    Name: req.name,
                    multi: req.multi,
                    active: 0,
                    loginCounter: 0
                };
                const createdData = await collection.create(data)
                if (Object.keys(createdData).length !== 0) {
                    Object.assign(obj_response, { status: 'success' }, { result: "Credential Added Successfuly" }, { detail: createdData })
                    return obj_response
                }
                else {
                    Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                    return obj_response
                }
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    async logoutDairy(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const doc = await collection.find({ 'username': req.username });
            const data = doc[0]
            if (doc.length == 1) {
                let token = req.token
                // Check If User Is Active
                if (data.active == 0) {
                    Object.assign(obj_response, { status: 'success' }, { result: "User Not Active" })
                    return obj_response
                } else {
                    let val = data.active - 1;
                    let update;
                    // Check which User Is Active 
                    if (data.Host_Token1 == token) {
                        update = await collection.updateOne({ username: data.username }, { $set: { active: val, Host_Token1: '' } });
                    } else if (data.Host_Token2 == token) {
                        update = await collection.updateOne({ username: data.username }, { $set: { active: val, Host_Token2: '' } });
                    }
                    // Check if object is modified
                    if ( Object.keys(update).length>0) {
                        if (update.modifiedCount == 1) {
                            Object.assign(obj_response, { status: 'success' }, { result: "Logout SuccessFully" }, { details: data })
                            return obj_response
                        } else {
                            Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                            return obj_response
                        }
                    }

                }
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                return obj_response
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }


    // Member Auth 
    async AuthMember(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const filter = { 'No': req.No, 'UId': req.UId };
            const doc = await memCollection.find(filter);
            if (doc.length == 0) {
                Object.assign(obj_response, { status: 'success' }, { result: "Username does not exist" })
                return obj_response
            }
            else {
                const data = doc[0]
                if (req.password == data.password) {
                    if (data.passwordChanged == 0) {
                        Object.assign(obj_response, { status: 'success' }, { result: "Change The Password" })
                        return obj_response
                    }
                    else {
                        if (data.active < 2) {
                            const val = data.active + 1
                            const update = await memCollection.updateOne(filter, { $set: { active: val } });
                            if (update.modifiedCount == 1) {
                                Object.assign(obj_response, { status: 'success' }, { result: "Login SuccessFull" }, { details: data })
                                return obj_response
                            }
                            else {
                                Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                                return obj_response
                            }
                        } else {
                            Object.assign(obj_response, { status: 'success' }, { result: "User Already Active" })
                            return obj_response
                        }
                    }

                } else {
                    Object.assign(obj_response, { status: 'success' }, { result: "Invalid Username or password" })
                    return obj_response
                }
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }

    async logoutMember(req) {
        try {
            let obj_response = {};
            let now = new Date();
            const filter = { 'No': req.No, 'UId': req.UId };
            const doc = await memCollection.find(filter)
            const data = doc[0]
            if (doc.length == 1) {
                if (data.active == 0) {
                    Object.assign(obj_response, { status: 'success' }, { result: "Logout SuccessFully" })
                    return obj_response
                } else {
                    let val = data.active - 1
                    const update = await memCollection.updateOne(filter, { $set: { active: val } })
                    if (update.modifiedCount == 1) {
                        Object.assign(obj_response, { status: 'success' }, { result: "Logout SuccessFully" }, { details: data })
                        return obj_response
                    } else {
                        Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                        return obj_response
                    }
                }
            } else {
                Object.assign(obj_response, { status: 'success' }, { result: "NA" })
                return obj_response
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    }
}

module.exports = Login;