const nodemailer = require('nodemailer');
require('dotenv').config();


const sendMail = (username, otp) => {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cmfriend111@gmail.com',
                pass: process.env.PASSKEY
            }
        });
        var mailOptions = {
            from: 'cmfriend111@gmail.com',
            to: `${username}`,
            subject: 'This is an auto-generated mail for OTP Services',
            html: `<h1>OTP on your Request</h1>
        <p>Dear ${username}</p>
        <p>We have sent you an OTP for your Password Change...</p>
        <p>OTP: ${otp}</p>
        <p>OTP will be expired in 10 minutes...</p>
        <p>Thank you!!!</p>`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return { status: 200, message: "success", data: [] }
    } catch (error) {
        return { status: 300, message: "error", data: [] }
    }
}

const generateOTP = () => {
    try {
        while (true) {
            let chars = '0123456789';
            let OTP = '';
            for (let i = 6; i > 0; --i) {
                let rand = Math.round(Math.random() * (chars.length - 1))
                OTP += chars[rand];
            }
            return OTP
        }
    } catch (err) {
        console.log(err);
    }
};


module.exports = {
    sendMail, generateOTP
}
