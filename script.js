function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí deberías realizar la lógica de autenticación, por ejemplo, comparar el username y password con valores predefinidos
    // Esto es solo un ejemplo básico
    if (username === "soporte" && password === "difi") {
        window.location.href = "index2.html"; // Redirigir a la página protegida
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

