const nodemailer = require('nodemailer')
let Gmail = require('./src/services/GmailerService')
let Hotmail = require('./src/services/HotmailerService')

exports.MountMail = (request, reply) => {
  let {
    text,
    html,
    filename,
    filecontent,
    destinatario,
    service
  } = request.payload

  let data = {
    text,
    html,
    filename,
    filecontent,
    destinatario
  }
  let transporter = nodemailer.createTransport({
    service: service, // gmail or hotmail
    auth: {
      user: process.env.usuario,
      pass: process.env.senha
    }
  })

  let email = service === 'gmail' ? Gmail.send(data) : Hotmail.send(data)

  transporter.sendMail(email, (error, info) => {
    if (error) return console.log(error)

    return console.log('Email enviado: ' + info.response)
  })
}
