let url = '../autos.json';
const request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
var auto = '';

request.onload = function() {
    auto = request.response;
    console.log(request.response);
    mostrarJson()
}

$(document).ready(function() {

    $(".BotonMostrarServicios").click(() => {
        $(".mostrarServicios").show();
    })

    $(".BotonocultarServicios").click(() => {
        $(".mostrarServicios").hide();
    })

})

function mostrarJson() {
    let mostrarServicios = '<div><h2>El nombre del json es autos.json y se encuentra en la direccion: tpGrupalGrupo5/autos.json</h2></div>';
    mostrarServicios += '<div><h3> Su estructura es:</h3></div>';
    mostrarServicios += '<div><p>"productos": ' + auto.productos + '</p></div>';
    mostrarServicios += '<div><p>"tipo": ' + auto.productos + '</p></div>';
    mostrarServicios += '<div><p>"active": ' + auto.active + '</p></div>';
    mostrarServicios += '<div><p>"catalogo":</p></div>';
    mostrarServicios += '<div><p>{</p></div>';
    mostrarServicios += '<div><p>   "id": ' + auto.catalogo[1].id + '</p></div>';
    mostrarServicios += '<div><p>   "marca": ' + auto.catalogo[1].marca + '</p></div>';
    mostrarServicios += '<div><p>   "nombre": ' + auto.catalogo[1].nombre + '</p></div>';
    mostrarServicios += '<div><p>   "kilometros": ' + auto.catalogo[1].kilometros + '</p></div>';
    mostrarServicios += '<div><p>   "precio": ' + auto.catalogo[1].precio + '</p></div>';
    mostrarServicios += '<div><p>   "modelo": ' + auto.catalogo[1].modelo + '</p></div>';
    mostrarServicios += '<div><p>   "img": ' + auto.catalogo[1].img + '</p></div>';
    mostrarServicios += '<div><p>   "descripcion": ' + auto.catalogo[1].descripcion + '</p></div>';
    mostrarServicios += '<div><p>   "destacado": ' + auto.catalogo[1].destacado + '</p></div>';
    mostrarServicios += '<div><p>   "modernidad": ' + auto.catalogo[1].modernidad + '</p></div>';
    mostrarServicios += '<div><p>   "active": ' + auto.catalogo[1].active + '</p></div>';
    mostrarServicios += '<div><p>}</p></div>';
    $('.mostrarServicios').append(mostrarServicios);
}