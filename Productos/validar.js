const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
var modal = document.getElementById('myModal');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

var suma1 = new Boolean(false);
var suma2 = new Boolean(false);
var suma3 = new Boolean(false);

function checkInputs() {
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
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
	
	if(mensajeValue === '') {
		setErrorFor(mensaje, 'Complete este campo');
	} else if (mensajeValue.length <= 40) {
		setErrorFor(mensaje, 'No ha cumplido con el minimo de caracteres requeridos');
	} else if (mensajeValue.length >= 240) {
		setErrorFor(mensaje, 'Ha sobrepasado el limite de caracteres permitidos');
	} else {
		setSuccessFor(mensaje);
		suma3 = Boolean(true);
	}

	if (suma1 == true && suma2 == true && suma3 == true ) {
		modal.style.display = "block";
	}

	var cabe = document.getElementById('cabecera');
	cabe.insertAdjacentHTML('afterbegin', nombreValue);

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
