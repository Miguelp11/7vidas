// Iniciar AOS
AOS.init();

// Menu desplegable
let menuHamburguesa= document.getElementById('menuHamburguesa');
let menu= document.getElementById('menu');

menuHamburguesa.addEventListener('click', function(){
    menu.classList.toggle('desplegar');
});

//boton formulario
let boton= document.getElementById('enviar');

boton.addEventListener('click', function(e){
    e.preventDefault();
    alert("Ups!!, esto aun no funciona...");
});