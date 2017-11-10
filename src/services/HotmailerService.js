exports.send = data => {
  const email = {
    from: process.env.usuario,
    to: data.destinatario,
    subject: data.subject,
    html: data.html,
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
