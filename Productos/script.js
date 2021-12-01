let url = 'auto.json';
const request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
var auto = '';

request.onload = function() {
    auto = request.response;
    console.log(request.response);
    setCartasAutos();
}


function setCartasAutos() {
    let catalogo = auto.catalogo;
    catalogo.forEach(element => {
        let elementGalery = '<div class="col-md-6 col-lg-4"><div class="card" ' + element.id + '">';
        elementGalery += '<img src= ' + element.img + ' class="card-img-top" alt="..."></img>';
        elementGalery += '<div class="card-body">';
        elementGalery += '<h5 class="card-title" style="font-size: 1.25rem;"> ' + element.nombre + ' </h5>';
        elementGalery += '<p class="card-text"><b> Modelo: </b>' + element.modelo + ' </p>';
        elementGalery += '<p class="card-text"><b> Kilometros: </b>' + element.kilometros + ' </p>';
        elementGalery += '<p class="card-text"><b> Precio: </b>' + element.precio + ' </p>';
        elementGalery += '<a href="#" class="btn btn-primary d-flex justify-content-center">Ver detalles</a>';
        elementGalery += '<div class="d-flex justify-content-between align-items-center">';
        elementGalery += '<div class="btn-group">';
        elementGalery += '</div></div></div></div></div>';

        $('#gallery_view').append(elementGalery);

    });
}