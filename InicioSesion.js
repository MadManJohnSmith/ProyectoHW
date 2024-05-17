function checkInputs() {
    const email = document.getElementById('floatingInput').value.trim();
    const password = document.getElementById('floatingPassword').value.trim();

    const loginBtn = document.getElementById('loginBtn');
    if (email !== '' && password !== '' && validateEmail(email)) {
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled', 'disabled');
    }
}

function checkInputsSignup() {
    const email = document.getElementById('floatingInput2').value.trim();
    const password = document.getElementById('floatingPassword2').value.trim();
    const confirmPassword = document.getElementById('floatingPassword3').value.trim();

    const signupBtn = document.getElementById('signupBtn');
    if (email !== '' && password !== '' && confirmPassword !== '' && validateEmail(email)) {
        signupBtn.removeAttribute('disabled');
    } else {
        signupBtn.setAttribute('disabled', 'disabled');
    }
}

function login() {
    const email = document.getElementById('floatingInput').value.trim();
    if (validateEmail(email)) {
        showToast(email);
        window.location.href = 'Pagina Principal.html';
    } else {
        alert('El formato del correo electrónico no es válido.');
    }
}

function signup() {
    const email = document.getElementById('floatingInput2').value.trim();
    if (validateEmail(email)) {
        showToast(email);
    } else {
        alert('El formato del correo electrónico no es válido.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showToast(email) {
    const toast = new bootstrap.Toast(document.getElementById('toastPlacement'));
    document.getElementById('emailContent').innerText = email;
    toast.show();
}

function confirmRedirect() {
    window.location.href = 'Pagina Principal.html';
}