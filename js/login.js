
let selectedAge = null;
function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginForm.classList.toggle('active');
    registerForm.classList.toggle('active');
}

// Selección de edad
document.querySelectorAll('.age-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.age-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        selectedAge = this.getAttribute('data-age');
    });
});

// Indicador de fortaleza de contraseña
document.getElementById('registerPassword').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('strengthBar');
    
    strengthBar.className = 'password-strength-bar';
    
    if (password.length < 6) {
        strengthBar.classList.add('strength-weak');
    } else if (password.length < 10) {
        strengthBar.classList.add('strength-medium');
    } else {
        strengthBar.classList.add('strength-strong');
    }
});

// Manejo del formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Aquí iría la lógica de autenticación
    console.log('Login:', { email, password });
    
    // Redirección a menu.html
    window.location.href = 'menu.html';
});

// Manejo del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!selectedAge) {
        alert('Por favor, selecciona tu rango de edad 😊');
        return;
    }
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Aquí iría la lógica de registro
    console.log('Registro:', { name, email, password, age: selectedAge });
    
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    setTimeout(() => {
        successMessage.style.display = 'none';
        toggleForm();
        document.getElementById('registerForm').reset();
        document.querySelectorAll('.age-option').forEach(opt => opt.classList.remove('selected'));
        selectedAge = null;
    }, 2000);
});
