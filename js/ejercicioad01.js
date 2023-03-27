/*
Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
*/

let persona = {
  nombre: "Juan Pablo",
  apellido: "Alba",
  edad: 33,
  estudiante: false,
  hobbies: ["Basquet", "Footbal", "Tenis", "Viajar"],

  saludar: function () {
    document.write(
      `<p>Hola soy ${this.nombre}, ${this.apellido}, y tengo ${this.edad} años.</p>`
    );
    if (this.estudiante) {
      document.write("Soy estudiante <br>");
    } else {
      document.write("No soy estudiante <br><br>");
    }
    document.write("Mis hoobies son:<br>");
    for (i = 0; i < this.hobbies.length; i++) {
      document.write(`${this.hobbies[i]}<br>`);
    }
  },

  agregarhoobie: function (agrear) {
    this.hobbies.push(agrear);
  },

  buscarhobbie: function () {
    if (this.hobbies.find((buscar) => buscar === "Viajar")) {
      return document.write("<br>Si Existe el metodo Viajar<br>");
    } else {
      return document.write("No Existe <br>");
    }
  },

  elimiarhobbie: function () {
    this.hobbies.shift();
  },
};

persona.saludar();
persona.agregarhoobie("Pin Pong");
persona.saludar();
persona.buscarhobbie("Viajar");
persona.elimiarhobbie();
persona.saludar();
