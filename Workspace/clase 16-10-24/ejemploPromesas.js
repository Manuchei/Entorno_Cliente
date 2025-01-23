//Ejemplo de clases promesas

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Se resuelve la promesa despues de un segundo");
  }, 3000);
});

function promesaconDelay(delay) {
  return new Promise((resolve, reject) => {
    if (delay > 7000) {
      reject("Error en la promesa");
    }

    setTimeout(() => {
      resolve(`Se resuelve la promesa despues de ${delay} milisengods`);
    }, 3000);
  });
}

promesaconDelay(5000)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

promesa
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Se ha ejecutado la llamada");
  });

  //Utilizando arrow functions
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
    console.log(user.name)
    });
  });

  function saludar(usuario){
    console.log("Hola Don/Doña " + usuario);

  }

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
   saludar(user.name)
    });
  });

