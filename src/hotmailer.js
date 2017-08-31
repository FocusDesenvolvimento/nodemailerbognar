const nodemailer = require('nodemailer');
const sender = '';
const password = '############';
const target = '';

const transporter = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: sender,
    pass: password
  }
});

const email = {
  from: sender,
  to: target,
  subject: 'Mail using heroku',
  text: 'This mail is send using nodemailer on heroku.',
  html: '<p>This mail is send using <b>nodemailer</b> on <b>heroku</b></p>',
  attachments: [
    {
      // utf-8 string as an attachment
      filename: 'text9999.txt',
      content: 'hello world!'
    }
  ]
};

// {   // encoded string as an attachment
//   filename: 'text1.txt',
//   content: 'aGVsbG8gd29ybGQh',
//   encoding: 'base64'
// }

transporter.sendMail(email, (err, result) => {
  if (err) return console.log(err);
  console.log({
    msg: 'Mensagem enviada!',
    id: result.messageId,
    response: result.response
  });
});
