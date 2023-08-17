const memberServices = require("./memberServices");

const registerMemberControllerFn = async (req, res) => {
  console.log(JSON.stringify(req.body));

    try
    {
    const body=req.body;
    console.log(body);
    const status = await memberServices.registerMemberDBService(req.body);
    console.log("below true or false");
    console.log(status);
    if (status) {
        res.status(200).send({ "status": true, "message": "Student created successfully" });
    } else {
        res.status(200).send({ "status": false, "message": "Error creating user" })
    }
    }
    catch (error) {
    // console.log(error);
    res.status(400).send(error);
    }
};

var sportsregisterControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await memberServices.sportsRegisterDBService(req.body);
        console.log("i have saved the data ");
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { registerMemberControllerFn ,sportsregisterControllerFn};