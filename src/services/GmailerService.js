exports.send = data => {
  let email = {
    from: process.env.usuario, // Quem enviou este e-mail
    to: data.destinatario, // Quem receberá
    subject: data.subject, // Um assunto bacana :-)
    html: data.html, // O conteúdo do e-mail,
    attachments: [
      {
        // utf-8 string as an attachment
        filename: data.filename,
        content: data.filecontent
      }
    ]
  }

  return email
}
