var nodemailer = require('nodemailer');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/send-email', function(req, res) {
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'abc@gmail.com',
        pass: 'xxxxx'
    }
});
const mailOptions = {
  from: 'abc@gmail.com',
  to: 'xyz@gmail.com',
  subject: req.subject,
  text: req.content
};
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log('Email successfully sent');
});
});
