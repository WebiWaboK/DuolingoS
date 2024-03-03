document.addEventListener('DOMContentLoaded', function () {
    //-------------------------Variables para modificar el DOOM-------------------------\\
    var body = document.body;
    var header = document.createElement('header');
    var nuevoDiv = document.createElement('div');
    var nuevoDiv1 = document.createElement('div');
    var divTextoInicio = document.createElement('div');
    var botonEmpieza = document.createElement('buttom');
    var imgDuoInicio = document.createElement('img');
    var barraIdiomas = document.createElement('div');
    var br = document.createElement('br');
    
    //-------------------------Propiedades de todo-------------------------\\

    //Propiedades del header
    //header.style.backgroundColor = '#fff';
    //header.style.top = '0';
    //header.style.marginTop = '1%';
 
    var barraBlanca = document.createElement('div');
    barraBlanca.style.width = '100%';
    barraBlanca.style.height = '100px';
    barraBlanca.style.marginLeft = '-8px';
    barraBlanca.style.backgroundColor = '#fff';
    barraBlanca.style.position = 'fixed';  
    barraBlanca.style.top = '0';

    // Propiedades del div "nuevoDiv"
    nuevoDiv.textContent = 'APRENDE DIFERENTES IDIOMAS ▽';
    nuevoDiv.style.cursor = 'pointer';
    nuevoDiv.style.padding = '10px';
    nuevoDiv.style.backgroundColor = '#fff';
    nuevoDiv.style.color = '#9b9898';
    nuevoDiv.style.position = 'fixed';  
    nuevoDiv.style.top = '0';          
    nuevoDiv.style.right = '0';          
    //nuevoDiv.style.transform = 'translateY(-50%)';
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
    imgDuoInicio.style.marginTop = '-18%';
    imgDuoInicio.style.position = 'static';
    
    //Propiedades de la barra de idiomas
    barraIdiomas.textContent = 'Idiomas aca';
    barraIdiomas.style.textAlign = 'center';
    barraIdiomas.style.borderBlock = "2px solid #000";
    barraIdiomas.style.marginTop = "10%"
    barraIdiomas.style.height = '100%';
    barraIdiomas.style.fontSize = '3vw';
    barraIdiomas.style.fontWeight = 'bold';
    barraIdiomas.style.fontFamily = 'Arial, sans-serif';

    botonEmpieza.textContent = 'EMPIEZA AHORA';
    botonEmpieza.style.marginLeft = '8%';
    botonEmpieza.style.cursor = 'pointer';
    botonEmpieza.style.fontWeight = 'bold';
    botonEmpieza.style.height = '100%';
    botonEmpieza.style.scale = '80%';
    botonEmpieza.style.borderRadius = '15px';
    botonEmpieza.style.fontFamily = 'Arial, sans-serif';
    botonEmpieza.style.fontSize = '1.5vw';
    botonEmpieza.style.backgroundColor = '#58cc02';
    botonEmpieza.style.color = '#fff';
    botonEmpieza.style.display = 'block';
    botonEmpieza.style.marginTop = '40px';
    botonEmpieza.style.marginRight = '50px';
    botonEmpieza.style.paddingTop = '20px';
    botonEmpieza.style.paddingBottom = '20px';
    botonEmpieza.style.paddingRight = '30px';
    botonEmpieza.style.paddingLeft = '35px';
    botonEmpieza.style.boxShadow = '0px 6px 4px rgba(63, 145, 0, 1)'
    

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
        } else {
            header.style.position = 'fixed';
        }
    });

    //Funcion anuncio para que funcione el boton
    botonEmpieza.addEventListener('click', function() {
        alert('Empieza ahora ya');
    })
  
    //-------------------------Declaracion y anidacion de los diferentes elementos del DOM-------------------------\\


    //Añadir los div's necesarios al header
    body.appendChild(header);

    body.appendChild(divTextoInicio);
    body.appendChild(imgDuoInicio);
    divTextoInicio.appendChild(botonEmpieza);
    body.appendChild(barraIdiomas);
    
    //Añade el nuevoDiv al cuerpo del documento
    header.appendChild(nuevoDiv);
    header.appendChild(nuevoDiv1);
    header.insertBefore(barraBlanca, header.firstChild);

    // Agregar el mini menú dentro del nuevoDiv
    nuevoDiv.appendChild(menuIdiomas);

});