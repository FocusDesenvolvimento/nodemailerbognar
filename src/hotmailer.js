const nodemailer = require('nodemailer');
const  transporter = nodemailer.createTransport({
  service: 'Hotmail',
    auth: {
      user: '@hotmail.com',
      pass: ''
    }
});

const email = {
  from: '@hotmail.com',
  to: '',
  subject: 'Mail using heroku',
  text: 'This mail is send using nodemailer on heroku.',
  html: '<p>This mail is send using <b>nodemailer</b> on <b>heroku</b></p>'
}



transporter.sendMail(email, (err, result)=>{
  if(err) return console.log(err)
  console.log('Mensagem enviada!'  + result.response)
})
