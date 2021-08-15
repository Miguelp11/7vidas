var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    contacto: true
  });
});

router.post('/', async(req, res, next)=>{
  // console.log(req.body); verificar que los datos se esten enviando en el formulario
  var nombre = req.body.nombre;
  var apellido = req.body.apellidos;
  var correo = req.body.correo;
  var mensaje = req.body.mensaje;

  var cuerpoCorreo = {
    to: "miguel_p1194@outlook.com",
    subject: "Correo desde la pagina de Contacto 7 Vidas",
    html: `El usuario ${nombre} ${apellido} con correo ${correo} se ha comunicado desde la pagina de contacto. <br>
    ha mandado el siguiente mensaje: <br> ${mensaje}`
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
    confirmacion: "Su mensaje fue enviado correctamente, pronto nos comunicaremos con usted"
  });

});


module.exports = router;
