document.addEventListener('DOMContentLoaded', function () {
    //-------------------------Variables para modificar el DOOM-------------------------\\
    var body = document.body;
    var header = document.createElement('header');
    var nuevoDiv = document.createElement('div');
    var nuevoDiv1 = document.createElement('div');
    var divTextoInicio = document.createElement('div');
    var imgDuoInicio = document.createElement('img');
    

    //-------------------------Propiedades de todo-------------------------\\

    //Propiedades del header
    header.style.backgroundColor = '#fff';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.width = '100%';

    
    // Propiedades del div "nuevoDiv"
    nuevoDiv.textContent = 'Aprende diferentes idiomas';
    nuevoDiv.style.cursor = 'pointer';
    nuevoDiv.style.padding = '10px';
    nuevoDiv.style.backgroundColor = '#fff';
    nuevoDiv.style.color = '#9b9898';
    nuevoDiv.style.position = 'fixed';  
    nuevoDiv.style.top = '5%';          
    nuevoDiv.style.right = '0';          
    nuevoDiv.style.transform = 'translateY(-50%)';
    nuevoDiv.style.display = 'inline-block';
    nuevoDiv.style.marginTop = '1%';
    nuevoDiv.style.marginRight = '11.5%';
    nuevoDiv.style.fontSize = '25px';
    nuevoDiv.style.fontWeight = 'bold';
    nuevoDiv.style.fontFamily = 'Arial, sans-serif';
    
    //Propiedades del div "nuevoDiv1"
    nuevoDiv1.textContent = '*BUHO* duolingo';
    nuevoDiv1.style.backgroundColor = '#fff';
    nuevoDiv1.style.color = '#58cc02';
    nuevoDiv1.style.position = 'fixed';
    nuevoDiv1.style.display = 'inline-block';
    nuevoDiv1.style.fontSize = '35px';
    nuevoDiv1.style.marginTop = '2%'
    nuevoDiv1.style.fontWeight = 'bold';
    nuevoDiv1.style.fontFamily = 'Arial, sans-serif';

    // Propiedades del menu "menuIdiomas"
    var menuIdiomas = document.createElement('div');
    menuIdiomas.style.display = 'none';
    menuIdiomas.style.position = 'absolute';
    menuIdiomas.style.backgroundColor = '#fff';
    menuIdiomas.style.border = '2px solid #000';
    menuIdiomas.style.color = '#000';
    menuIdiomas.style.fontFamily = 'Arial, sans-serif';

    //Propiedades del div "divTextoInicio"
    divTextoInicio.textContent = '¡La forma divertida, efectiva y gratis de aprender un idioma!';
    divTextoInicio.style.color = '#3f3e3e';
    divTextoInicio.style.fontSize = '35px';
    divTextoInicio.style.marginLeft = '50%';
    divTextoInicio.style.marginTop = '220px';
    divTextoInicio.style.marginRight = "9%";
    divTextoInicio.style.textAlign = 'center';
    divTextoInicio.style.fontFamily = 'Arial, sans-serif';
    divTextoInicio.style.fontWeight = 'bold';

    //Propiedades de la imagen
    imgDuoInicio.src = 'C://Users//PRH//Documents//Nueva carpeta//imagenes//duo.PNG';
    imgDuoInicio.style.scale = '10%';
    imgDuoInicio.style.alignContent = 'left';
    

    //-------------------------Opciones o funciones-------------------------\\

    //menuIdiomas
    //Asignar opciones al menuIdiomas
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
            header.style.position = 'relative';
        }
    });


    //-------------------------Declaracion y anidacion de los diferentes elementos del DOM-------------------------\\


    //Añadir los div's necesarios al header
    body.appendChild(header);
    body.appendChild(divTextoInicio);
    body.appendChild(imgDuoInicio);

    //Añade el nuevoDiv al cuerpo del documento
    header.appendChild(nuevoDiv);
    header.appendChild(nuevoDiv1);

    // Agregar el mini menú dentro del nuevoDiv
    nuevoDiv.appendChild(menuIdiomas);

});

