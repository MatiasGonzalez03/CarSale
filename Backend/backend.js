var modal = document.getElementById('serv');
let params = new URLSearchParams(location.search);
var id = params.get('id');
console.log(id);
if (id == 1){
    console.log('admin');
    modal.style.display = 'block';
} else if (id ==2){
    console.log('viewer');
} else {
    window.location.href = "IniciarSesion.html";
}