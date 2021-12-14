var urlString = window.location.href;
var urlDireccion = new URL(urlString);
var productId = urlDireccion.searchParams.get("prodId");

let url = '../autos.json';
const request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
var auto = '';

request.onload = function() {
    auto = request.response;
    console.log(request.response);
    var catalogo = auto.catalogo;
    buscarAutos(catalogo);
}

function buscarAutos(catalogo) {
    catalogo.forEach(element => {
        if (element.id == productId) {
            setAutos(element);
        }
    });
}

function setAutos(element) {

    let elementGalery = '<div class="container text-center" style="margin-top: 20px;">'
    elementGalery += '<h1>' + element.nombre + '</h1></div>'
    elementGalery += '<div class="container" style="margin-top: 50px; ">'
    elementGalery += '<div class="row">'
    elementGalery += '<div class="col-md-4" style="margin: 0px;">'
    elementGalery += '<img src= ' + element.img + ' class="img-fluid" id="foto" alt="..."></div>'
    elementGalery += '<div class="col-md-6" style="position: relative;">'
    elementGalery += '<h5> Modelo: ' + element.modelo + '</h5>'
    elementGalery += '<h5> Kilometros: ' + element.kilometros + '</h5>'
    elementGalery += '<p style="margin: 30px 0px; ">' + element.descripcion + '</p>'
    elementGalery += '<h2 style = "position: absolute; right: 0; color: green;" > Precio: ' + element.precio + ' </h2>'
    elementGalery += '</div></div></div>'
    $('#gallery_view').append(elementGalery);
}