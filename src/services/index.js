const { myAccountDetailsByUsernameModel, editProfileDetailsByUsernameModel, getUserSettingsByUsernameModel, editUserSettingsByUsernameModel,
    getCheckUsernameInOtpTableModel, updateOtpModel, insertOtpModel,
    getVillageDetailsFromApByVillagec1, getVillageDetailsFromApByVillage
} = require('../models/index');
const { sendMail, generateOTP } = require('./mailService');


const getMyAccountDetailsByUsernameService = async (req, res) => {
    try {
        const { email } = req.body;
        if (req.body.hasOwnProperty('email')) {
            console.log("sometimes from body we may get {'email':'a@gmail.com'} or {'username':'a@gmail.com'} for this purpose we will use this ==> if(req.body.hasOwnProperty('email')){queries with email executed here} elseif{req.body.hasOwnProperty('username')){queries with username executed here} like this", email);
        }
        const result = await myAccountDetailsByUsernameModel(email);
        return { status: 200, message: "success", data: result.rows };
    } catch (error) {
        res.status(500).json({ error: "error in getting data from query" });
    }
};

const editProfileDetailsByUsernameService = async (req, res) => {
    try {
        const { first_name, last_name, email, mobile, alternatemobile } = req.body;
        const result = await editProfileDetailsByUsernameModel(first_name, last_name, email, mobile, alternatemobile);
        return { status: 200, message: "success", data: [] };
    } catch (error) {
        res.status(500).json({ error: "error in getting data from query" });
    }
};

const getUserSettingsByUsernameService = async (req, res) => {
    try {
        const { username } = req.body;
        const result = await getUserSettingsByUsernameModel(username);
        return { status: 200, message: "success", data: result.rows };
    } catch (error) {
        res.status(500).json({ error: "error in getting data from query" });
    }
};

const editUserSettingsByUsernameService = async (req, res) => {
    try {
        const { username, defaultbasemap, defaultmapview } = req.body;
        const result = await editUserSettingsByUsernameModel(username, defaultbasemap, defaultmapview);
        return { status: 200, message: "success", data: [] };
    } catch (error) {
        res.status(500).json({ error: "error in getting data from query" });
    }
};

const getOtpService = async (req, res) => {
    try {
        const { username } = req.body;
        const otp = generateOTP();
        sendMail(username, otp);
        const checkUser = await getCheckUsernameInOtpTableModel(username);
        if (checkUser.rowCount === 1) {
            updateOtp = await updateOtpModel(username, otp);
            return { status: 200, message: "otp sent to the user mail", data: [] };
        }
        else {
            insertOtp = await insertOtpModel(username, otp);
            return { status: 200, message: "otp sent to the user mail", data: [] };
        }
    } catch (error) {
        res.status(500).json({ error: "error occured during the otp generation or database error" });
    }
};




const getVillageDetailsFromApByVillageNameOrCodeService = async (req, res) => {
    try {
        if (req.body.hasOwnProperty('villagec_1')) {
            const { villagec_1 } = req.body;
            console.log("village_c1", villagec_1);
            const result = await getVillageDetailsFromApByVillagec1(villagec_1);
            return { status: 200, message: "success", data: result.rows };
        }
        else if (req.body.hasOwnProperty('village')) {
            const { village } = req.body;
            console.log("village", village);
            const result = await getVillageDetailsFromApByVillage(village);
            return { status: 200, message: "success", data: result.rows };
        }
        else {
            return { status: 400, message: "invalid request: please provide valid paramaters" };
        }
    } catch (error) {
        res.status(500).json({ error: "error in getting data from query" });
    }
};



module.exports = {
    getMyAccountDetailsByUsernameService, editProfileDetailsByUsernameService, getUserSettingsByUsernameService, editUserSettingsByUsernameService,
    getOtpService,
    getVillageDetailsFromApByVillageNameOrCodeService
}