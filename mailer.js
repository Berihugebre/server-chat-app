const nodemailer = require("nodemailer");

require('dotenv').config()
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECIVER_EMAIL = process.env.RECIVER_EMAIL;
const MY_PASS = process.env.MY_PASS;
// async..await is not allowed in global scope, must use a wrapper
async function mailer(output) {
  let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SENDER_EMAIL, // generated ethereal user
      pass: MY_PASS // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: SENDER_EMAIL, // sender address
    to: RECIVER_EMAIL, // list of receivers
    subject: "User online", // Subject line
    text: "new user sent a message", // plain text body
    html: output // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

mailer().catch(console.error);

module.exports = mailer;