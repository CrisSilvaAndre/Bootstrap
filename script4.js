// Validación del formulario de contacto
const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  // Validar nombres
  const nombre = document.getElementById("nombre");
  if (nombre.value.trim() === "") {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  // Validar correos
  const correo = document.getElementById("correo");
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoValido.test(correo.value)) {
    correo.classList.add("is-invalid");
    valido = false;
  } else {
    correo.classList.remove("is-invalid");
  }

  // Validar mensajes
  const mensaje = document.getElementById("mensaje");
  if (mensaje.value.trim() === "") {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (valido) {
    alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
    formulario.reset();
  }
});

// Botón de alerta
const botonAlerta = document.getElementById("botonAlerta");
botonAlerta.addEventListener("click", function () {
  alert("¡Hola! Esta es una alerta personalizada desde JavaScript.");
});
