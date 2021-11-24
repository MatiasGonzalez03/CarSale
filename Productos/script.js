const url = 'autos.json';
const request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
var autos = '';

request.onload = function() {
    console.log(request.response);
    autos = request.response;
}