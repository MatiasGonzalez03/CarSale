let url = '../autos.json';
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
    mostrarDestacados(catalogo);
    mostrarNoDestacados(catalogo)

}

function mostrarDestacados(catalogo) {
    catalogo.forEach(element => {
        if (element.destacado == true) {
            if (element.active == true) {
                let elementGalery = '<div class="col-md-6 col-lg-4 ' + element.marca + ' ' + element.modernidad + ' ' + element.marca + element.modernidad + '"><div class="card" ' + element.id + '">';
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
            }
        }
    });
}

function mostrarNoDestacados(catalogo) {
    catalogo.forEach(element => {
        if (element.destacado == false) {
            if (element.active == true) {
                let elementGalery = '<div class="col-md-6 col-lg-4 ' + element.marca + ' ' + element.modernidad + ' ' + element.marca + element.modernidad + '"><div class="card" ' + element.id + '">';
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
            }
        }
    });
}

$(document).ready(function() {
    $(".btnFiat").click(() => {
        $(".Peugeot").hide();
        $(".Fiat").show();
    })
    $(".btnPeugeot").click(() => {
        $(".Fiat").hide();
        $(".Peugeot").show();
    })
    $(".autoModerno").click(() => {
        $(".moderno").show();
        $(".antiguo").hide();
    })
    $(".autoAntiguo").click(() => {
        $(".antiguo").show();
        $(".moderno").hide();
    })

    $(".fiatModerno").click(() => {
        $(".Fiatmoderno").show();
        $(".Peugeot").hide();
        $(".antiguo").hide();
    })

    $(".fiatAntiguo").click(() => {
        $(".Fiatantiguo").show();
        $(".Peugeot").hide();
        $(".moderno").hide();
    })

    $(".peugeotModerno").click(() => {
        $(".Peugeotmoderno").show();
        $(".Fiat").hide();
        $(".antiguo").hide();
    })
    $(".peugeotAntiguo").click(() => {
        $(".Peugeotantiguo").show();
        $(".Fiat").hide();
        $(".moderno").hide();
    })

    $(".verTodo").click(() => {
        $(".Fiat").show();
        $(".Peugeot").show();
    })
})