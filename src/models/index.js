const { pool } = require('../../database/index');

const myAccountDetailsByUsernameModel = async (email) => {
    try {
        const exe_query = `select * from mpbt_users where email = '${email}'`;
        const result = await pool.query(exe_query);
        return result;
    } catch (error) {
        console.error("query error", error);
        return error;
    }
};

module.exports = {
    myAccountDetailsByUsernameModel
};
