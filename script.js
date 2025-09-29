const imagenes = Array.from(document.querySelectorAll('.galeria .imagenes img'));
let indiceActual = 0;

function abrirImagen(img) {
    indiceActual = imagenes.indexOf(img);
    mostrarImagen();
    document.getElementById("lightbox").style.display = "block";
}

function mostrarImagen() {
    const imagenGrande = document.getElementById("imagenGrande");
    imagenGrande.src = imagenes[indiceActual].src;
}

function cambiarImagen(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) indiceActual = imagenes.length - 1;
    if (indiceActual >= imagenes.length) indiceActual = 0;
    mostrarImagen();
}

function cerrarImagen() {
    document.getElementById("lightbox").style.display = "none";
}
