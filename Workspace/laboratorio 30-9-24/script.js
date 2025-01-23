document.addEventListener("DOMContentLoaded", function (event) {
  const form = document.getElementById("miformulario");

  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");

  /*Ejemplo para acceder al formulario con querySelector
  const form2 - document.querySelector('form');*/
  form.addEventListener("submit", function (event) {
   

    /* Se pone value porque nombre es el nombre de la cajita entera
         y queremos acceder al valor del nombre */
    if (nombre.value.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return
    }
    if (!validarEmail(email.value)) {
      alert("Intrduzca un email correcto");
      return
    }
    if (!validarTelefono(telefono.value)) {
      alert("Introduzca un numero valido");
      return
    }

    let edadN = Number(edad.value);
    if (edadN < 0 || edadN > 120) {
      alert("Introduzca una edad entre 0 y 120");
    }
    form.submit();
  });

  nombre.addEventListener('blur', function (event){
    if (nombre.value.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        
      }

  })
});

function validarEmail(email) {
  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return emailRegex.test(email);
}
function validarTelefono(telefono) {
  const telefonoRegex = /^[0-9]{9}$/;
  return telefonoRegex.test(telefono);
}
