// sender server mail(from) should be default mail id \  browser compatability sign in id should be "from mail id" 
// allow (the from mail id) in the  security of google ac personalisation ("allow low secure system app on ")

const express = require("express");
const app = express();
const port = 3000
const config = require("./config");
const mailer = require("nodemailer");
require('dotenv').config();
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

let body = {
    from: 'shyamprakash.cse@gmail.com',
    to: 'shyamprakashstudymaterial@gmail.com',
    subject: "hello this is from shyamprakash Web App.",
    html: `<a href="www.google.com">click this link for verification</a>`
}

transporter.sendMail(body, (err, result) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(result);
});