const { getMyAccountDetailsByUsernameService, editProfileDetailsByUsernameService, getUserSettingsByUsernameService, editUserSettingsByUsernameService,
    getOtpService,
    getVillageDetailsFromApByVillageNameOrCodeService
 } = require("../services/index");
const { callServices } = require('./callServices');


const getMyAccountDetailsByUsernameController = async (req, res) => {
    callServices(getMyAccountDetailsByUsernameService, req, res);
}

const editProfileDetailsByUsernameController = async (req, res) => {
    callServices(editProfileDetailsByUsernameService, req, res);
}

const getUserSettingsByUsernameController = async (req, res) => {
    callServices(getUserSettingsByUsernameService, req, res);
}

const editUserSettingsByUsernameController = async (req, res) => {
    callServices(editUserSettingsByUsernameService, req, res);
}

const getOtpController = async (req, res) => {
    callServices(getOtpService, req, res);
}




const getVillageDetailsFromApByVillageNameOrCodeController = async (req, res) => {
    callServices(getVillageDetailsFromApByVillageNameOrCodeService, req, res);
}


module.exports = {
    getMyAccountDetailsByUsernameController, editProfileDetailsByUsernameController, getUserSettingsByUsernameController, editUserSettingsByUsernameController,
    getOtpController,
    getVillageDetailsFromApByVillageNameOrCodeController
}