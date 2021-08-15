var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('voluntarios', {
    voluntarios : true
  });
});

router.post('/', async(req, res, next)=>{
  // console.log(req.body);
  var nombre = req.body.nombre;
  var apellido = req.body.apellidos;
  var telefono = req.body.telefono;
  var correo = req.body.correo;
  var apoyo = req.body.apoyo;

  var cuerpoCorreo = {
    to: "miguel_p1194@outlook.com",
    subject: "Solicitud voluntario 7 vidas",
    html: `El usuario ${nombre} ${apellido} quiere participar como voluntario apoyando en las siguientes areas. <br>
    ${apoyo} <br> Su informacion de contacto es telefono : ${telefono} y correo ${correo}.`
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(cuerpoCorreo);

  res.render('contacto', {
    confirmacion: "📩 Su solicitud fue enviada correctamente, pronto nos comunicaramos con usted para seguir el proceso."
  });
});

module.exports = router;