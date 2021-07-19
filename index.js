const user = document.getElementById('user');
const mail = document.getElementById('mail');
const correctOne = document.getElementById('correct');
const warningOne = document.getElementById('warning');
const register = document.getElementById('register');
const correctTwo = document.getElementById('correctTwo');
const warningTwo = document.getElementById('warningTwo');

register.addEventListener('click', function() {
    warningOne.innerHTML = '';
    correctOne.innerHTML = '';
    warningTwo.innerHTML = '';
    correctTwo.innerHTML = '';
    if (user.value.length < 5) {
        warningOne.innerHTML = 'Incorrect';
    } else {
        correctOne.innerHTML = 'correct';
    }
    if (mail.value.length < 10) {
        warningTwo.innerHTML = 'Incorrect';
    } else {
        correctTwo.innerHTML = 'Correct';
    }
})