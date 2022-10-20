//selecciono todo la web
JQuery(document).ready(listo);


/* //////////////////////////////////////////////////////////
   ////////////   **FUNCION PARA HEADER**   /////////////////
*/ //////////////////////////////////////////////////////////
function header() {
    document.write(
        // La siguiente linea crea un contenedor, lo que permite dar un formato especifico a todo lo interior
        '<div class="container">',
        // La siguiente linea hace que al presionar aqui se salte a la pagina del index 
        '<a href="index.html">',
        // La siguiente linea pone una imagen sobre la cual clickear 
        '<img src="imagenes/ada3.jpg" class="logo">',
        '</a>',
        // La siguiente linea coloca secciones a las cual saltar 
        '<nav>',
        '<a href="index.html">Inicio</a>',
        '<a href="nosotros.html" >Nosotros</a>',
        '<a href="galeria.html">Galería</a>',
        '<a href="contactenos.html">Contactenos</a>',
        '</nav>',
        '<a href="#" class="hamb"><i class="fa-solid fa-bars"></i></a>',
        '</div>'
    )
}

/* //////////////////////////////////////////////////////////
   ////////////   **FUNCION PARA FOOTER**   /////////////////
*/ //////////////////////////////////////////////////////////
function footer() {
    document.write(
        '<div class="container">',
        '<div class="row">',
        '<div class="columna columna-25 columna-mobile-100">',
        '<img src="imagenes/alan-turing.png" class="logo-footer">',
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>',
        '</div>',
        '<div class="columna columna-25 columna-mobile-100">',
        ' <h3>',
        '    Temas relacionados',
        ' </h3>',
        '<ul>',
        ' <li><a href="#">Tema 1</a></li>',
        '<li><a href="#">Tema 2</a></li>',
        '<li><a href="#">Tema 3</a></li>',
        '</ul>',
        '</div>',
        '<div class="columna columna-25 columna-mobile-100">',
        '<h3>',
        ' Autores:',
        '</h3>',
        '<ul>',
        '<li>Bautista Castagna</li>',
        '<li>Germán Cardozo</li>',
        '<li>Leonardo xxxx</li>',
        '</ul>',
        '</div>',
        '<div class="columna columna-25 columna-mobile-100">',
        '<h3>',
        ' Redes Sociales',
        '</h3>',
        '<ul class="redes">',
        '<li>',
        '<a href="#">',
        '<i class="fa-brands fa-facebook"></i>',
        '</a>',
        '</li>',
        '<li>',
        '<a href="#">',
        '<i class="fa-brands fa-twitter-square"></i>',
        '</a>',
        '</li>',
        '<li>',
        '<a href="#">',
        '<i class="fa-brands fa-instagram"></i>',
        '</a>',
        '</li>',
        '</ul>',
        '</div>',
        '</div>',
        '</div>',
        '<div class="barra-footer">',
        '&copy; Comisión 22506 - 2022',
        '</div>'
    )

}


/* //////////////////////////////////////////////////////////
   ///////   **FUNCIONES PARA VALIDAR FORMULARIOS**   ///////
*/ //////////////////////////////////////////////////////////
function validarEnviar() {
    //valido el nombre
    if (document.fvalida.nombre.value.length <= 5) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }

    //valido edad
    var testear = document.fvalida.edad.checked;
    if (!testear) {
        alert('Debe ser mayor de 18 años para contactarse con nosotros');
        document.fvalida.edad.focus()
        return 0;
    }

    //valido email
    testear = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/
    if (!testear.test(document.fvalida.email.value)) {
        alert("La dirección de email  no es valida");
        document.fvalida.email.focus()
        return 0;
    }

    //valido el interés
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }

    //valido el nombre
    if (document.fvalida.mensaje.length == 0) {
        alert("Debe dejar un mensaje")
        document.fvalida.mensaje.focus()
        return 0;
    }

    //Finalmente, si llegó hasta aqui, se envia el form.
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}