const { myAccountDetailsByUsernameService } = require("../services/index");
const { callServices } = require('./callServices');

const myAccountDetailsByUsernameController = async (req, res) => {
    callServices(myAccountDetailsByUsernameService, req, res);
}


module.exports = {
    myAccountDetailsByUsernameController
}