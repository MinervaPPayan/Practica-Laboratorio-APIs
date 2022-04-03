//Comprobación navegador acepta API FILES

if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs estan soportadas');
} else {
    alert('La API de FILE no esta soportada en este navegador.');
}

// Función ejecutada tras la carga del fichero
function cargarVideo(e) {
    var miFichero = e.target.files;
    var fichero = miFichero[0];
    var errordiv = document.getElementById("errores");
    var videodiv = document.getElementById("video");
    var controles = document.getElementById("controles");
// validacón de que el fichero es un video
    if (fichero.type.substring(0, 5) == "video") {
        // Alert para informar al usuario de que el video se está cargando
        alert("CARGANDO " + fichero.name.toUpperCase() + "...");
        //Ocultamos el div que contiene el error y mostramos el div que contendrá el video
        videodiv.style.display = "flex";
        errordiv.style.display = "none";
        if (!document.getElementById("video2")) {
            //Si no existe la etiqueta video, la generamos y la insertamos en el div
            var figure = document.getElementById("figure");
            var video = document.createElement("video");
            video.setAttribute("controls", true);
            video.setAttribute("id", "video2");
            video.setAttribute("src", fichero.name);
            video.setAttribute("width", "820");
            video.setAttribute("height","500");
            figure.appendChild(video);
        } else {
            //Si ya existe, modificamos el video para indicarle el nuevo fichero a cargar 
            var video = document.getElementById("video2");
            video.setAttribute("src", fichero.name);
        }
        //Mostramos el div de los controles del video
        controles.style.display = "flex";
    } else {
        //Ocultamos los divs del video y los controles y mostramos el div del error
        videodiv.style.display = "none";
        controles.style.display = "none";
        errordiv.style.display = "flex";

        //Si existe algun video ejecutadose, lo eliminamos
        var videoExiste = document.getElementById("video2");
        if (videoExiste) {
            videoExiste.parentNode.removeChild(videoExiste);
        }

        if (!document.getElementById("error")) {
            // Si no existen las etiquetas de error, se crean
            var error = document.createElement("h3");
            var error2 = document.createElement("h3");
            error.id = "error";
            error2.id = "error2";
            var contenido = document.createTextNode("EL ARCHIVO SELECCIONADO NO ES CORRECTO");
            var contenido2 = document.createTextNode("POR FAVOR SELECCIONE UN ARCHIVO DE VIDEO");
            error.appendChild(contenido);
            error2.appendChild(contenido2);
            errordiv.appendChild(error);
            errordiv.appendChild(error2);
        }
    }
}