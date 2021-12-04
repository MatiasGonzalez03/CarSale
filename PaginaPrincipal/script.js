let url = '../autos.json';
const request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
var auto = '';

request.onload = function() {
    auto = request.response;
    console.log(request.response);
    AutosDestacados();
}

function AutosDestacados() {
    let catalogo = auto.catalogo;
    var contadorTrue = 1

    catalogo.forEach(element => {
        if (contadorTrue < 7) {
            if (element.destacado == true && element.active == true) {
                let elementGalery = '<div class="col-md-6 col-lg-4" "' + element.marca + '"><div class="card" ' + element.id + '">';
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
                contadorTrue = contadorTrue + 1;
            }
        }
    });
}


/*
function AutosDestacadosAleatorio(){
   let tamañoDelCatalogo = Object.keys(auto.catalogo).length
   var ramdom = Math.floor(Math.random() * tamañoDelCatalogo)
   console.log(ramdom)
   for (var n = 0; n <= tamañoDelCatalogo; n++) {
       var ramdom = Math.floor(Math.random() * tamañoDelCatalogo);
       if (auto.catalogo.destacado[ramdom] == true && auto.catalogo.active[ramdom] == true) {
           let elementGalery = '<div class="col-md-6 col-lg-4" "' + auto.catalogo.marca[ramdom] + '"><div class="card" ' + auto.catalogo.id[ramdom] + '">';
           elementGalery += '<img src= ' + auto.catalogo.img[ramdom] + ' class="card-img-top" alt="..."></img>';
           elementGalery += '<div class="card-body">';
           elementGalery += '<h5 class="card-title" style="font-size: 1.25rem;"> ' + auto.catalogo.nombre[ramdom] + ' </h5>';
           elementGalery += '<p class="card-text"><b> Modelo: </b>' + auto.catalogo.modelo[ramdom] + ' </p>';
           elementGalery += '<p class="card-text"><b> Kilometros: </b>' + auto.catalogo.kilometros[ramdom] + ' </p>';
           elementGalery += '<p class="card-text"><b> Precio: </b>' + auto.catalogo.precio[ramdom] + ' </p>';
           elementGalery += '<a href="#" class="btn btn-primary d-flex justify-content-center">Ver detalles</a>';
           elementGalery += '<div class="d-flex justify-content-between align-items-center">';
           elementGalery += '<div class="btn-group">';
           elementGalery += '</div></div></div></div></div>';

           $('#gallery_view').append(elementGalery);
           //contadorTrue = contadorTrue + 1;
       }
   }
   console.log(auto.catalogo[ramdom])
   }
   */