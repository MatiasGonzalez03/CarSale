const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

var suma1 = new Boolean(false);
var suma2 = new Boolean(false);
var suma3 = new Boolean(false);
var suma4 = new Boolean(false);

function checkInputs() {
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const telValue = tel.value.trim();
	const mensajeValue = mensaje.value.trim();

	if(nombreValue === '') {
		setErrorFor(nombre, 'Complete este campo');
	} else if (!isNombre(nombreValue)) {
		setErrorFor(nombre, 'Ingrese un nombre valido');
	} else {
		setSuccessFor(nombre);
		suma1 = Boolean(true);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Complete este campo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Ingrese un mail valido');
	} else {
		setSuccessFor(email);
		suma2 = Boolean(true);
	}
	
	if(telValue === '') {
		setErrorFor(tel, 'Complete este campo');
	} else if (!isTel(telValue)) {
		setErrorFor(tel, 'Ingrese un telefono valido');
	} else {
		setSuccessFor(tel);
		suma3 = Boolean(true);
	}
	
	if(mensajeValue === '') {
		setErrorFor(mensaje, 'Complete este campo');
	} else if (mensajeValue.length <= 40) {
		setErrorFor(mensaje, 'No ha cumplido con el minimo de caracteres requeridos');
	} else if (mensajeValue.length >= 240) {
		setErrorFor(mensaje, 'Ha sobrepasado el limite de caracteres permitidos');
	} else {
		setSuccessFor(mensaje);
		suma4 = Boolean(true);
	}

	if (suma1 == true && suma2 == true && suma3 == true && suma4 == true ) {
		modal.style.display = "block";
		const nombreee = nombre.value.trim();
		const emailll = email.value.trim();
		var cabe = document.getElementById('cabecera');
		cabe.insertAdjacentHTML('afterbegin', nombreee);
		var par = document.getElementById('parrafo');
		par.insertAdjacentHTML('afterbegin', emailll);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}
function isNombre(nombre) {
	return /^[a-zA-ZÀ-ÿ\s]+\ [a-zA-ZÀ-ÿ\s]{2,40}$/.test(nombre);
}
function isTel(tel) {
	return /^\d{7,14}$/.test(tel);
}

var modal = document.getElementById('myModal');

var modal2 = document.getElementById('myModal2');

var guardar = document.getElementById('guardar');

var btnclose = document.getElementById("btn");

var span = document.getElementsByClassName("close")[0];

guardar.onclick = function() {
	modal2.style.display = "block";
	modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

btnclose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
