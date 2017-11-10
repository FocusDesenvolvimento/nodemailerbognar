require('dotenv').config()
let Hapi = require('hapi')
let Mail = require('./src/services/MailerService')

let server = new Hapi.Server()
server.connection({ port: 3000, host: 'localhost' })

server.route([
  {
    method: 'POST',
    path: '/api/v1/mail',
    handler: Mail.MountMail
  }
])

server
  .start()
  .then(() => {
    console.log('Servidor Rodando')
  })
  .catch(err => {
    console.error(err.message)
    process.exit(1)
  })
