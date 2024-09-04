const express = require('express');
const { getMyAccountDetailsByUsernameController, editProfileDetailsByUsernameController, getUserSettingsByUsernameController, editUserSettingsByUsernameController,
        getOtpController,
        getVillageDetailsFromApByVillageNameOrCodeController
    } = require('../controllers/index.js');


router = express.Router();


router.post("/getmyaccountdetailsbyusername", getMyAccountDetailsByUsernameController);
router.put("/editprofiledetailsbyusername", editProfileDetailsByUsernameController);
router.post("/getusersettingsbyusername", getUserSettingsByUsernameController);
router.put("/editusersettingsbyusername", editUserSettingsByUsernameController);
router.post("/getotp", getOtpController);



router.post("/getvillagedetailsfromAabyvillagenameorcode", getVillageDetailsFromApByVillageNameOrCodeController);


module.exports = router;
