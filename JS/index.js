const register= document.getElementById('register');
const correct= document.getElementById('correct');
const warning= document.getElementById('warning');
const email = document.getElementById('email');

register.addEventListener('click', function () {
	/* body... */
	correct.innerHTML = '';
	warning.innerHTML = '';

	if (email.value.length < 8) {
		// statement
		warning.innerHTML = 'Incorrecto';
	} else {
		// statement
		correct.innerHTML = 'Correcto';
		window.location="password.html";
	}
})