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

    cartas(catalogo);
}

function cartas(catalogo, orden) {
    catalogo.forEach(element => {
        if (element.active == true) {
            let elementGalery = '<div class="col-sm-12 col-md-6 col-lg-4 ' + orden + ' ' + element.marca + ' ' + element.modernidad + ' ' + element.marca + element.modernidad + '"><div class="card" ' + element.id + '">';
            elementGalery += '<img src= ' + element.img + ' class="card-img-top" alt="..."></img>';
            elementGalery += '<div class="card-body">';
            elementGalery += '<h5 class="card-title" style="font-size: 1.25rem;"> ' + element.nombre + ' </h5>';
            elementGalery += '<p class="card-text"><b> Modelo: </b>' + element.modelo + ' </p>';
            elementGalery += '<p class="card-text"><b> Kilometros: </b>' + element.kilometros + ' </p>';
            elementGalery += '<p class="card-text"><b> Precio: </b>' + element.precio + ' </p>';
            elementGalery += '<a href="" class="btn btn-primary d-flex justify-content-center">Ver detalles</a>';
            elementGalery += '<div class="d-flex justify-content-between align-items-center">';
            elementGalery += '<div class="btn-group">';
            elementGalery += '</div></div></div></div></div>';

            $('#gallery_view').append(elementGalery);
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

    $(".ordenarAsc").click(() => {
        var JsonAsc = sortJSON(auto.catalogo, 'nombre', 'asc');
        console.log(JsonAsc);
        cartas(JsonAsc, "asc");
        $(".asc").show();
        $(".desc").hide();
        $(".undefined").hide();
        $(".destacadoss").hide();
    })
    $(".ordenarDesc").click(() => {
        var JsonDesc = sortJSON(auto.catalogo, 'nombre', 'desc');
        console.log(JsonDesc);
        cartas(JsonDesc, "desc");
        $(".desc").show();
        $(".asc").hide();
        $(".undefined").hide();
        $(".destacadoss").hide();
    })

    $(".destacados").click(() => {
        var JsonDestacado = sortJSON(auto.catalogo, 'destacado', 'desc');
        console.log(JsonDestacado);
        cartas(JsonDestacado, "destacadoss");
        $(".destacadoss").show();
        $(".desc").hide();
        $(".asc").hide();
        $(".undefined ").hide()
    })
})

function sortJSON(data, key, orden) {
    return data.sort(function(a, b) {
        var x = a[key],
            y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });

}

/*
catalogo.forEach(element => {
    if (element.marca == "Peugeot") {

    }
});

for (var i = 0; i < catalogo.length; i++) {
    if (catalogo[i].marca == "Peugeot") {
        catalogo[i].splice(i, 1)
    }
}

catalogo.forEach(function(catalogo, index, object) {
    if (catalogo.marca === 'Peugeot') {
        object.splice(index, 1);
    }
});
*/
/*
auto.catalogo = auto.catalogo.filter(function(catalogo) {
    return catalogo.marca == 'Fiat';
})
cartas(auto.catalogo)
*/