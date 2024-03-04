document.addEventListener('DOMContentLoaded', function () {
    //-------------------------Variables para modificar el DOOM-------------------------\\
    var body = document.body;
    var header = document.createElement('header');
    var nuevoDiv = document.createElement('div');
    var divIcono = document.createElement('div');
    var nuevoDiv1 = document.createElement('div');
    var imgDuoIcono = document.createElement('img');
    var divTextoInicio = document.createElement('div');
    var botonEmpieza = document.createElement('button');
    var imgDuoInicio = document.createElement('img');
    var barraIdiomas = document.createElement('div');
    var botonCuenta = document.createElement('button');
    var textoDivertido = document.createElement('div');
    var infoDivertido = document.createElement('div');
    var imgSrTelefono = document.createElement('img');
    var textoRespaldo = document.createElement('div');
    var infoRespaldo = document.createElement('div');
    var imgRespaldo = document.createElement('img');
    var textoMotivacion = document.createElement('div');
    var infoMotivacion = document.createElement('div');
    var imgMotivacion = document.createElement('img');
    var textoAprendizaje = document.createElement('div');
    var infoAprendizaje = document.createElement('div');
    var imgAprendizaje = document.createElement('img');
    var divSuperDuo = document.createElement('div');
    var imgSuperDuo = document.createElement('img');
    var infoSuperDuo = document.createElement('img');   
    var botonSuperDuo = document.createElement('button');
    var textoTestIngles = document.createElement('div');
    var infoTestIngles = document.createElement('div');
    var imgTestIngles = document.createElement('img');
    var textoEscuela = document.createElement('div');
    var infoEscuela = document.createElement('div');
    var imgEscuela = document.createElement('img');
    var textoAbc = document.createElement('div');
    var infoAbc = document.createElement('div');
    var imgAbc = document.createElement('img');
    var textoMath = document.createElement('div');
    var infoMath = document.createElement('div');
    var imgMath = document.createElement('img');
    
    
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
    nuevoDiv.style.fontSize = '1.2vw';
    nuevoDiv.style.fontWeight = 'bold';
    nuevoDiv.style.fontFamily = 'Arial, sans-serif';
    

    //Propiedades imgDuoIcono
    //imgDuoIcono.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//DuoIcono.PNG';
    //imgDuoIcono.style.marginLeft = '-4vw';
    //imgDuoIcono.style.marginTop = '-10vw';

    //Propiedades del div "nuevoDiv1"
    nuevoDiv1.textContent = 'duolingo';
    nuevoDiv1.style.backgroundColor = '#fff';
    nuevoDiv1.style.color = '#58cc02';
    nuevoDiv1.style.position = 'fixed';
    nuevoDiv1.style.top = '0';
    nuevoDiv1.style.fontSize = '2.9vw';
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
    textoDivertido.style.marginLeft = '12%';
    textoDivertido.style.marginRight = '50%';
    textoDivertido.style.fontSize = '3.8vw';
    textoDivertido.style.fontWeight = 'bold';
    textoDivertido.style.color = '#58cc02'

    //Propiedades infoDivertido
    infoDivertido.textContent = 'Aprender con Duolingo es divertido y los estudios demuestran que funciona. ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!';
    infoDivertido.style.fontSize = '1.2vw';
    infoDivertido.style.marginTop = '7%';
    infoDivertido.style.color = '#9b9898';
    infoDivertido.style.lineHeight = '2vw'

    //Propiedades imagen del telefono
    imgSrTelefono.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//SrTelefono.PNG'
    imgSrTelefono.style.marginLeft = '135%';
    imgSrTelefono.style.marginTop = '-70%';

    //Propiedades de textoRespaldo
    textoRespaldo.textContent = 'respaldado por la ciencia'
    textoRespaldo.style.fontSize = '3.8vw';
    textoRespaldo.style.fontWeight = 'bold';
    textoRespaldo.style.color = '#58cc02';
    textoRespaldo.style.marginTop = '15%';
    textoRespaldo.style.marginLeft = '50%';
    textoRespaldo.style.marginRight = '12%';

    //Propiedades infoRespaldo
    infoRespaldo.textContent = 'Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.';
    infoRespaldo.style.fontSize = '1.2vw';
    infoRespaldo.style.marginTop = '7%';
    infoRespaldo.style.color = '#9b9898';
    infoRespaldo.style.lineHeight = '2vw';

    //Propiedades de la imagen de respaldo
    imgRespaldo.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//Respaldo.PNG';
    imgRespaldo.style.marginLeft = '-120%';
    imgRespaldo.style.marginTop = '-70%';

    //Propiedades de div Motivacion
    textoMotivacion.textContent = 'mantén tu motivación';
    textoMotivacion.style.marginTop = '20%';
    textoMotivacion.style.marginLeft = '12%';
    textoMotivacion.style.marginRight = '50%';
    textoMotivacion.style.fontSize = '3.8vw';
    textoMotivacion.style.fontWeight = 'bold';
    textoMotivacion.style.color = '#58cc02';

    //Propiedades infoMotivacion
    infoMotivacion.textContent = 'Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.';
    infoMotivacion.style.fontSize = '1.2vw';
    infoMotivacion.style.marginTop = '7%';
    infoMotivacion.style.color = '#9b9898';
    infoMotivacion.style.lineHeight = '2vw';

    //Propiedades imgMotivaciopn
    imgMotivacion.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//Motivacion.PNG';
    imgMotivacion.style.marginLeft = '135%';
    imgMotivacion.style.marginTop = '-70%';

    //Propiedades de textoAprendizaje
    textoAprendizaje.textContent = 'aprendizaje personalizado';
    textoAprendizaje.style.fontSize = '3.8vw';
    textoAprendizaje.style.fontWeight = 'bold';
    textoAprendizaje.style.color = '#58cc02';
    textoAprendizaje.style.marginTop = '15%';
    textoAprendizaje.style.marginLeft = '50%';
    textoAprendizaje.style.marginRight = '12%';

    //Propiedades infoAprendizaje
    infoAprendizaje.textContent = 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.';
    infoAprendizaje.style.fontSize = '1.2vw';
    infoAprendizaje.style.marginTop = '7%';
    infoAprendizaje.style.color = '#9b9898';
    infoAprendizaje.style.lineHeight = '2vw';

    //Propiedades de la imagen de Aprendizaje
    imgAprendizaje.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//Aprendizaje.PNG';
    imgAprendizaje.style.marginLeft = '-120%';
    imgAprendizaje.style.marginTop = '-70%';

    //Propiedades divSuperDuo
    divSuperDuo.style.backgroundColor = '#100f3e';
    divSuperDuo.style.marginTop = '9%';
    divSuperDuo.style.marginLeft = '-1%';
    divSuperDuo.style.width = '101.6%';
    divSuperDuo.style.paddingTop = '20%';
    divSuperDuo.style.paddingBottom = '20%';
    divSuperDuo.style.display = 'flex';
    divSuperDuo.style.alignItems = 'center';

    //Propiedades de la imgSuperDuo
    imgSuperDuo.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//superDuo.PNG';
    imgSuperDuo.style.marginLeft = '8%';
    imgSuperDuo.style.marginTop = '-8%';

    //Propiedades del titulo imagen
    infoSuperDuo.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//superDuoTexto.PNG';
    infoSuperDuo.style.position = 'static';
    infoSuperDuo.marginTop = '20%';
    infoSuperDuo.style.marginLeft = '-1%';
    infoSuperDuo.style.display = 'flex';
    infoSuperDuo.style.alignItems = 'center';
    infoSuperDuo.style.justifyContent = 'center';

    //Propiedades del boton superDuo
    botonSuperDuo.textContent = 'PRUEBA 2 SEMANAS GRATIS';
    botonSuperDuo.style.position = 'block';
    botonSuperDuo.style.marginTop = '10%';
    botonSuperDuo.style.marginLeft = '-26%';
    botonSuperDuo.style.cursor = 'pointer';
    botonSuperDuo.style.fontWeight = 'bold';
    botonSuperDuo.style.borderRadius = '12px';
    botonSuperDuo.style.border = '3px solid #e2e2e2'
    botonSuperDuo.style.fontFamily = 'Arial, sans-serif';
    botonSuperDuo.style.fontSize = '1.2vw';
    botonSuperDuo.style.backgroundColor = '#fff';
    botonSuperDuo.style.color = '#0077ff';
    botonSuperDuo.style.display = 'sticky';
    botonSuperDuo.style.paddingTop = '10px';
    botonSuperDuo.style.paddingBottom = '10px';
    botonSuperDuo.style.paddingRight = '7px';
    botonSuperDuo.style.paddingLeft = '7px';
    botonSuperDuo.style.boxShadow = '0px 4px 0px rgba(226, 226, 226, 1)';

    //Propiedades para titulo de test ingles
    textoTestIngles.textContent = 'duolingo english test';
    textoTestIngles.style.marginTop = '20%';
    textoTestIngles.style.marginLeft = '12%';
    textoTestIngles.style.marginRight = '50%';
    textoTestIngles.style.fontSize = '3.8vw';
    textoTestIngles.style.fontWeight = 'bold';
    textoTestIngles.style.color = '#58cc02';

    //Propiedades de info testIngles
    infoTestIngles.textContent = 'Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí.';
    infoTestIngles.style.fontSize = '1.2vw';
    infoTestIngles.style.marginTop = '7%';
    infoTestIngles.style.color = '#9b9898';
    infoTestIngles.style.lineHeight = '2vw';

    //Propiedades de imgTestIngles
    imgTestIngles.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//textIngles.PNG';
    imgTestIngles.style.marginLeft = '135%';
    imgTestIngles.style.marginTop = '-90%';

    //Propiedades de textEscuela
    textoEscuela.textContent = 'duolingo for schools';
    textoEscuela.style.fontSize = '3.8vw';
    textoEscuela.style.fontWeight = 'bold';
    textoEscuela.style.color = '#58cc02';
    textoEscuela.style.marginTop = '15%';
    textoEscuela.style.marginLeft = '50%';
    textoEscuela.style.marginRight = '10%';

    //Propiedades de infoEscuela
    infoEscuela.textContent = 'Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.';
    infoEscuela.style.fontSize = '1.2vw';
    infoEscuela.style.marginTop = '7%';
    infoEscuela.style.color = '#9b9898';
    infoEscuela.style.lineHeight = '2vw';

    //Propiedades imgEscuela
    imgEscuela.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//imgEscuela.PNG'
    imgEscuela.style.marginLeft = '-115%';
    imgEscuela.style.marginTop = '-70%';

    //Propiedades de textoAbc
    textoAbc.textContent = 'duolingo abc';
    textoAbc.style.marginTop = '20%';
    textoAbc.style.marginLeft = '12%';
    textoAbc.style.marginRight = '50%';
    textoAbc.style.fontSize = '3.8vw';
    textoAbc.style.fontWeight = 'bold';
    textoAbc.style.color = '#58cc02';

    //Propiedades de infoAbc
    infoAbc.textContent = '¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente gratis!';
    infoAbc.style.fontSize = '1.2vw';
    infoAbc.style.marginTop = '7%';
    infoAbc.style.color = '#9b9898';
    infoAbc.style.lineHeight = '2vw';

    //Propiedades de imgAbc
    imgAbc.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//abc.PNG'
    imgAbc.style.marginLeft = '135%';
    imgAbc.style.marginTop = '-90%';

    //Propiedades
    //Propiedades de math
    textoMath.textContent = 'duolingo math';
    textoMath.style.fontSize = '3.8vw';
    textoMath.style.fontWeight = 'bold';
    textoMath.style.color = '#58cc02';
    textoMath.style.marginTop = '15%';
    textoMath.style.marginLeft = '50%';
    textoMath.style.marginRight = '10%';

    //Propiedades de infoEscuela
    infoMath.textContent = '¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza matemática.';
    infoMath.style.fontSize = '1.2vw';
    infoMath.style.marginTop = '7%';
    infoMath.style.color = '#9b9898';
    infoMath.style.lineHeight = '2vw';

    //Propiedades imgEscuela
    imgMath.src = 'C://Users//Coco//Desktop//Duolingo//imagenes//math.PNG';
    imgMath.style.marginLeft = '-115%';
    imgMath.style.marginTop = '-70%'; 

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
    nuevoDiv1.appendChild(imgDuoIcono);
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
    textoDivertido.appendChild(infoDivertido);
    textoDivertido.appendChild(imgSrTelefono);
    body.appendChild(textoRespaldo);
    textoRespaldo.appendChild(infoRespaldo);
    textoRespaldo.appendChild(imgRespaldo);
    body.appendChild(textoMotivacion);
    textoMotivacion.appendChild(infoMotivacion);
    textoMotivacion.appendChild(imgMotivacion);
    body.appendChild(textoAprendizaje);
    textoAprendizaje.appendChild(infoAprendizaje);
    textoAprendizaje.appendChild(imgAprendizaje);
    body.appendChild(divSuperDuo);
    divSuperDuo.appendChild(imgSuperDuo);
    divSuperDuo.appendChild(infoSuperDuo);
    divSuperDuo.appendChild(botonSuperDuo);
    body.appendChild(textoTestIngles);
    textoTestIngles.appendChild(infoTestIngles);
    textoTestIngles.appendChild(imgTestIngles);
    body.appendChild(textoEscuela);
    textoEscuela.appendChild(infoEscuela);
    textoEscuela.appendChild(imgEscuela);
    body.appendChild(textoAbc);
    textoAbc.appendChild(infoAbc);
    textoAbc.appendChild(imgAbc);
    body.appendChild(textoMath);
    textoMath.appendChild(infoMath);
    textoMath.appendChild(imgMath);

});