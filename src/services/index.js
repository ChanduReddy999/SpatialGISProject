const { myAccountDetailsByUsernameModel } = require('../models/index');

const myAccountDetailsByUsernameService = async (req, res) => {
    try {
        const email = req.body.email;
        const result = await myAccountDetailsByUsernameModel(email);
        return {status: 200, message: "success", data:result.rows};
    } catch (error) {
        res.status(500).json({ error: "error in getting data from query" });
    }
}

module.exports = {
    myAccountDetailsByUsernameService
}