const password = document.getElementById('password');
const correct = document.getElementById('correct');
const warning = document.getElementById('warning');
const register = document.getElementById('register');

register.addEventListener('click', function () {
	/* body... */
	correct.innerHTML = '';
	warning.innerHTML = '';
	if (password.value.length < 8) {
		// statement
		warning.innerHTML = 'La contraseña es menor a 8 caracteres';
	} else {
		// statement
		correct.innerHTML = 'Redirecciónando';
		window.location = 'index.html';
	}
})