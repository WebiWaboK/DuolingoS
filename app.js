document.addEventListener('DOMContentLoaded', function () {
    //-------------------------Variables para modificar el DOOM-------------------------\\
    var body = document.body;
    var header = document.createElement('header');
    var nuevoDiv = document.createElement('div');
    var nuevoDiv1 = document.createElement('div');
    var divTextoInicio = document.createElement('div');
    var botonEmpieza = document.createElement('button');
    var imgDuoInicio = document.createElement('img');
    var barraIdiomas = document.createElement('div');
    var botonCuenta = document.createElement('button');
    var textoDivertido = document.createElement('div');
    
    //-------------------------Propiedades de todo-------------------------\\

    var barraBlanca = document.createElement('div');
    barraBlanca.style.width = '100%';
    barraBlanca.style.height = '100px';
    barraBlanca.style.marginLeft = '-8px';
    barraBlanca.style.backgroundColor = '#fff';
    barraBlanca.style.position = 'fixed';  
    barraBlanca.style.top = '0';
    barraBlanca.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 1)';

    // Propiedades del div "nuevoDiv"
    nuevoDiv.textContent = 'APRENDE DIFERENTES IDIOMAS ▽';
    nuevoDiv.style.cursor = 'pointer';
    nuevoDiv.style.padding = '10px';
    nuevoDiv.style.backgroundColor = '#fff';
    nuevoDiv.style.color = '#9b9898';
    nuevoDiv.style.position = 'fixed';  
    nuevoDiv.style.top = '0';          
    nuevoDiv.style.right = '0';          
    nuevoDiv.style.display = 'inline-block';
    nuevoDiv.style.marginTop = '2%';
    nuevoDiv.style.marginRight = '11.5%';
    nuevoDiv.style.fontSize = '1vw';
    nuevoDiv.style.fontWeight = 'bold';
    nuevoDiv.style.fontFamily = 'Arial, sans-serif';
    
    //Propiedades del div "nuevoDiv1"
    nuevoDiv1.textContent = '*Insertar buho* duolingo';
    nuevoDiv1.style.backgroundColor = '#fff';
    nuevoDiv1.style.color = '#58cc02';
    nuevoDiv1.style.position = 'fixed';
    nuevoDiv1.style.top = '0';
    nuevoDiv1.style.fontSize = '3vw';
    nuevoDiv1.style.display = 'inline-block'
    nuevoDiv1.style.marginTop = '2%'
    nuevoDiv1.style.fontWeight = 'bold';
    nuevoDiv1.style.fontFamily = 'Arial, sans-serif';
    nuevoDiv1.style.marginLeft = '12%'
    nuevoDiv1.style.cursor = 'pointer';

    // Propiedades del menu "menuIdiomas"
    var menuIdiomas = document.createElement('div');
    menuIdiomas.style.display = 'none';
    menuIdiomas.style.position = 'absolute';
    menuIdiomas.style.backgroundColor = '#fff';
    menuIdiomas.style.border = '2px solid #000';
    menuIdiomas.style.color = '#000';
    menuIdiomas.style.fontFamily = 'Arial, sans-serif';

    //Propiedades del div "divTextoInicio"
    divTextoInicio.textContent = "¡La forma divertida, efectiva y gratis de aprender un idioma!";
    divTextoInicio.style.color = '#3f3e3e';
    divTextoInicio.style.fontSize = '35px';
    divTextoInicio.style.marginLeft = '50%';
    divTextoInicio.style.marginTop = '220px';
    divTextoInicio.style.marginBottom = '2%'
    divTextoInicio.style.marginRight = "9%";
    divTextoInicio.style.textAlign = 'center';
    divTextoInicio.style.fontFamily = 'Arial, sans-serif';
    divTextoInicio.style.fontWeight = 'bold';

    //Propiedades de la imagen
    imgDuoInicio.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//duo.PNG';
    imgDuoInicio.style.marginLeft = '12%'
    imgDuoInicio.style.marginTop = '-28%';
    imgDuoInicio.style.position = 'static';
    
    //Propiedades de la barra de idiomas
    barraIdiomas.textContent = '';
    barraIdiomas.style.textAlign = 'center';
    barraIdiomas.style.borderBlock = "2px solid #9b9898";
    barraIdiomas.style.height = '100%';
    barraIdiomas.style.fontSize = '3vw';
    barraIdiomas.style.fontWeight = 'bold';
    barraIdiomas.style.fontFamily = 'Arial, sans-serif';
    barraIdiomas.style.marginTop = '6%';
    barraIdiomas.style.paddingTop = '7px';
    barraIdiomas.style.paddingBottom = '15px';

    //Propiedades del boton empezar ahora
    botonEmpieza.textContent = 'EMPIEZA AHORA';
    botonEmpieza.style.marginLeft = '8%';
    botonEmpieza.style.cursor = 'pointer';
    botonEmpieza.style.fontWeight = 'bold';
    botonEmpieza.style.height = '100%';
    botonEmpieza.style.borderRadius = '12px';
    botonEmpieza.style.border = '2px solid #58cc02';
    botonEmpieza.style.fontFamily = 'Arial, sans-serif';
    botonEmpieza.style.fontSize = '1.2vw';
    botonEmpieza.style.backgroundColor = '#58cc02';
    botonEmpieza.style.color = '#fff';
    botonEmpieza.style.display = 'sticky';
    botonEmpieza.style.marginTop = '20px';
    botonEmpieza.style.marginRight = '50px';
    botonEmpieza.style.paddingTop = '10px';
    botonEmpieza.style.paddingBottom = '10px';
    botonEmpieza.style.paddingRight = '120px';
    botonEmpieza.style.paddingLeft = '120px';
    botonEmpieza.style.boxShadow = '0px 6px 0px rgba(63, 145, 0, 1)'
    
    //Propiedades del boton de cuenta
    botonCuenta.textContent = 'YA TENGO UNA CUENTA';
    botonCuenta.style.marginLeft = '8%';
    botonCuenta.style.cursor = 'pointer';
    botonCuenta.style.fontWeight = 'bold';
    //botonCuenta.style.height = '100%';
    botonCuenta.style.borderRadius = '12px';
    botonCuenta.style.border = '3px solid #e2e2e2'
    botonCuenta.style.fontFamily = 'Arial, sans-serif';
    botonCuenta.style.fontSize = '1.2vw';
    botonCuenta.style.backgroundColor = '#fff';
    botonCuenta.style.color = '#0077ff';
    botonCuenta.style.display = 'sticky';
    botonCuenta.style.marginTop = '20px';
    botonCuenta.style.marginRight = '50px';
    botonCuenta.style.paddingTop = '10px';
    botonCuenta.style.paddingBottom = '10px';
    botonCuenta.style.paddingRight = '95px';
    botonCuenta.style.paddingLeft = '95px';
    botonCuenta.style.boxShadow = '0px 4px 0px rgba(226, 226, 226, 1)'

    //Propiedades de el div textoDivertido
    textoDivertido.textContent = 'divertido, efectivo y gratis';
    textoDivertido.style.marginTop = '20%';
    

    //-------------------------Opciones o funciones-------------------------\\

    //menuIdiomas
    //Asignar opciones al menuIdioma

    var opciones = ['Español', 'Ingles', 'Ruso'];

    opciones.forEach(function (opcionTexto) {
        var opcion = document.createElement('div');
        opcion.textContent = opcionTexto;
        opcion.style.padding = '10px';
        opcion.style.cursor = 'pointer';

        opcion.addEventListener('click', function () {
            alert('Hiciste click en: ' + opcionTexto);  //Esta funcion hace que salga un menu donde se te diga a que opcion de diste click
        });

        menuIdiomas.appendChild(opcion);
    });

    //Funcion para ocultar el menu
    nuevoDiv.addEventListener('click', function () {
        if (menuIdiomas.style.display === 'block') {
            menuIdiomas.style.display = 'none';
        } else {
            menuIdiomas.style.display = 'block';
        }
    });

    //El menu se cuerra si se da click fuera de estea
    document.addEventListener('click', function (event) {
        if (!menuIdiomas.contains(event.target) && event.target !== nuevoDiv) {
            menuIdiomas.style.display = 'none';
        }
    });

    //Funcion para que el header siga el scroll
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 0) {
            header.style.position = 'fixed';
            barraBlanca.style.boxShadow = '0px 2px 0px rgba(226, 226, 226, 1)';
        } else {
            header.style.position = 'fixed';
            barraBlanca.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 1)';
        }
    });

    //Funcion anuncio para que funcione el boton
    botonEmpieza.addEventListener('click', function() {
        alert('Empieza ahora ya');
    })
  
    var idiomas = ['INGLES        ', 'FRANCES        ', 'ESPAÑOL        ', 'RUSO        ', 'ITALIANO    '];

    // Crear opciones para cada idioma
    idiomas.forEach(function(idioma, index) {
        var opcionIdioma = document.createElement('span');
        opcionIdioma.textContent = idioma;
        opcionIdioma.style.cursor = 'pointer';
        if (index < idiomas.length - 1) {
            opcionIdioma.style.marginRight = '10px'; 
        }
        opcionIdioma.style.fontSize = '20px';
        opcionIdioma.style.color = '#9b9898';
        opcionIdioma.addEventListener('click', function() {
            alert('Seleccionaste el idioma: ' + idioma);
        });
        barraIdiomas.appendChild(opcionIdioma);
    });

    // Agregar la barra de idiomas al cuerpo del documento
    document.body.appendChild(barraIdiomas);

    //-------------------------Declaracion y anidacion de los diferentes elementos del DOM-------------------------\\

    header.appendChild(nuevoDiv);
    header.appendChild(nuevoDiv1);
    header.insertBefore(barraBlanca, header.firstChild);
    body.appendChild(header);
    body.appendChild(divTextoInicio);
    body.appendChild(imgDuoInicio);
    divTextoInicio.appendChild(botonEmpieza);
    divTextoInicio.appendChild(botonCuenta);
    body.appendChild(barraIdiomas);
    body.appendChild(textoDivertido);
    nuevoDiv.appendChild(menuIdiomas);

});