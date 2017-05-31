var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abiabiramy93@gmail.com',
    pass: '2520241'
  }
});

var mailOptions = {
  from: 'abiabiramy93@gmail.com',
  to: 'info@uki.life.com',
  subject: 'Testing my nodemailer module',
  text: 'This is easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response ,info.messageId);
  }
});
