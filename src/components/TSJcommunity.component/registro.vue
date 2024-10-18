<template>
    <div class="form-container">
        <form id="registroForm" action="#" method="POST" novalidate>
            <h2>Formulario de Registro</h2>
            
            <!-- Nombre Completo -->
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required>
            <span class="validation-msg" id="nombre-validation"></span>
            
            <!-- Correo Electrónico -->
            <label for="email">Correo Institucional:</label>
            <input type="email" id="email" name="email" required>
            <span class="validation-msg" id="email-validation"></span>
            
            <!-- Numero de control -->
            <label for="numero">Número de Control:</label>
            <input type="text" id="numero" name="numero" required>

            <!-- Contraseña -->
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            <span class="validation-msg" id="password-validation"></span>

            <!-- Confirmar Contraseña -->
            <label for="confirmPassword">Confirmar Contraseña:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
            <span class="validation-msg" id="confirm-password-validation"></span>
            
            
            
            <!-- Tienes carro -->
            <label for= "respuesta">Tienes Carro:</label>
            <select id="respuesta" name="respuesta" onchange="mostrarSeccion()">
                <option value="null">-Selecciona-</option>
                <option value="no">No</option>
                <option value="si">Si</option>
            </select>

            <!-------Seleccion oculta------->
            <div id="extra-section">
            <!-- Placas -->
            <label for="placas">Placas:</label>
            <input type="text" id="placas" name="placas">
            
            <!-- Adjuntar archivo -->
             <label>Licencia:</label>
            <label for="archivo">Tome una foto a su licencia y subela para su verificacion.</label>
            <input type="file" id="archivo" name="archivo">
            </div>

            <!-- Botones -->
            <div class="buttons">
                <button type="submit">Enviar</button>
                <button type="reset">Limpiar</button>
            </div>
        </form>
    </div>

</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#extra-section {
    display: none;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170vh;

    background: linear-gradient(270deg, #242724, #cf03be, #580ba0, #166686);
    background-size: 600% 600%;
    animation: gradientAnimation 10s ease infinite;
}

.form-container {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #115570;
}

label {
    display: block;
    margin-bottom: 8px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
input[type="file"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.gender-options, .preferences {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

button[type="reset"] {
    background-color: #dc3545;
}

button[type="reset"]:hover {
    background-color: #c82333;
}

.validation-msg {
    color: red;
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: none;
}

@media (max-width: 600px) {
    .form-container {
        padding: 15px;
    }

    input, textarea {
        font-size: 0.9rem;
    }

    button {
        padding: 8px 15px;
    }
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>

<script>
document.getElementById('registroForm').addEventListener('submit', function(event) {
    let valid = true;

    // Validar nombre completo
    const nombre = document.getElementById('nombre');
    const nombreValidation = document.getElementById('nombre-validation');
    if (nombre.value.trim() === '') {
        nombreValidation.textContent = 'El nombre es obligatorio';
        nombreValidation.style.display = 'block';
        valid = false;
    } else {
        nombreValidation.style.display = 'none';
    }

    // Validar correo electrónico
    const email = document.getElementById('email');
    const emailValidation = document.getElementById('email-validation');
    if (!email.checkValidity()) {
        emailValidation.textContent = 'Correo electrónico inválido';
        emailValidation.style.display = 'block';
        valid = false;
    } else {
        emailValidation.style.display = 'none';
    }

    // Validar contraseñas
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordValidation = document.getElementById('password-validation');
    const confirmPasswordValidation = document.getElementById('confirm-password-validation');

    if (password.value === '' || confirmPassword.value === '') {
        passwordValidation.textContent = 'La contraseña es obligatoria';
        confirmPasswordValidation.textContent = 'Confirma la contraseña';
        passwordValidation.style.display = 'block';
        confirmPasswordValidation.style.display = 'block';
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordValidation.textContent = 'Las contraseñas no coinciden';
        confirmPasswordValidation.style.display = 'block';
        valid = false;
    } else {
        passwordValidation.style.display = 'none';
        confirmPasswordValidation.style.display = 'none';
    }

    // Validar fecha de nacimiento (mayor de 18 años)
    const birthDate = document.getElementById('birthDate');
    const birthDateValidation = document.getElementById('birthDate-validation');
    const birthDateValue = new Date(birthDate.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDateValue.getFullYear();
    if (age < 18 || isNaN(age)) {
        birthDateValidation.textContent = 'Debes ser mayor de 18 años';
        birthDateValidation.style.display = 'block';
        valid = false;
    } else {
        birthDateValidation.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();  // Evitar el envío si hay errores
    }
});

//----------------------------SECCION OCULTA---------------------------------------------



</script>