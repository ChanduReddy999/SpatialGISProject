const express = require('express');
const { myAccountDetailsByUsernameController } = require('../controllers/index.js');

router = express.Router();

router.post("/myaccountdetailsbyusername", myAccountDetailsByUsernameController);

module.exports = router;
