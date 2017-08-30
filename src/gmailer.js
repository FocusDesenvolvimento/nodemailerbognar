var nodemailer = require('nodemailer');

var $usuario = '';
var $senha = ''; 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: $usuario,
        pass: $senha
    }
});

var $destinatario = '';

var mailOptions = {
    from: $usuario,
    to: $destinatario,
    subject: 'Enviando um email pelo Node.js',
    text: 'Muito fácil enviar um email pelo node, tente você também!'
};

var email = {
  from: '', // Quem enviou este e-mail
  to: '', // Quem receberá
  subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
  html: 'E-mail foi enviado do <strong>Node.js</strong>', // O conteúdo do e-mail
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});