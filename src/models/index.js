const { pool } = require('../../database/index');


const myAccountDetailsByUsernameModel = async (email) => {
    try {
        const exe_query = `select * from mbpt_users where email = '${email}'`;
        const result = await pool.query(exe_query);
        return result;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};

const editProfileDetailsByUsernameModel = async (first_name, last_name, email, mobile, alternatemobile) => {
    try {
        const exe_query = `update mbpt_users set first_name='${first_name}', last_name='${last_name}', mobile = '${mobile}', 
                                                    alternatemobile='${alternatemobile}' where email ='${email}'`;
        const result = await pool.query(exe_query);
        return result;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};

const getUserSettingsByUsernameModel = async (username) => {
    try {
        const exe_query = `select * from user_settings where username ='${username}'`;
        const result = await pool.query(exe_query);
        return result;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};

const editUserSettingsByUsernameModel = async (username, defaultbasemap, defaultmapview) => {
    try {
        const exe_query = `update user_settings set defaultbasemap= '${defaultbasemap}', defaultmapview='${defaultmapview}'
                                         where username ='${username}'`;
        const result = await pool.query(exe_query);
        return result;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};


// get otp models => getCheckUsernameInOtpTableModel, updateOtpModel, insertOtpModel
const getCheckUsernameInOtpTableModel = async (username) => {
    try {
        const exe_query = `select 1 from otptable where username = '${username}'`;
        const checkUser = await pool.query(exe_query);
        return checkUser;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};

const updateOtpModel = async (username, otp) => {
    try {
        const exe_query = `update otptable set otp = ${otp}, is_expired =false, updatedAt=now() where username = '${username}'`;
        const updateOtp = await pool.query(exe_query);
        return updateOtp;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};

const insertOtpModel = async(username, otp)=>{
    try {
        const exe_query = `insert into otptable (username, otp, updatedAt) values ('${username}', '${otp}', now()`;
        const insertOtp = await pool.query(exe_query);
        return insertOtp;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
}

async function updateExpiredOtps() {
    try {
        const updateQuery = `UPDATE otpTable
                                SET is_expired = TRUE
                                WHERE NOT is_expired AND updatedAt <= NOW() - INTERVAL '10 minutes'`;
        const result = await pool.query(updateQuery);
        console.log(`${result.rowCount} rows updated to expired in OtpTable.`);
    } catch (err) {
        console.error('Error updating expired OTPs:', err);
    }
}
setInterval(updateExpiredOtps, 60 * 1000);




const getVillageDetailsFromApByVillagec1 = async (villagec_1) => {
    try {
        const exe_query = `select  * from ap_new_villageboundary where villagec_1 = '${villagec_1}'`;
        const checkUser = await pool.query(exe_query);
        return checkUser;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};
const getVillageDetailsFromApByVillage = async (village) => {
    try {
        const exe_query = `select  * from ap_new_villageboundary where village = '${village}'`;
        const checkUser = await pool.query(exe_query);
        return checkUser;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};





module.exports = {
    myAccountDetailsByUsernameModel, editProfileDetailsByUsernameModel, getUserSettingsByUsernameModel, editUserSettingsByUsernameModel,
    getCheckUsernameInOtpTableModel, updateOtpModel, insertOtpModel,          
    getVillageDetailsFromApByVillagec1, getVillageDetailsFromApByVillage
};
