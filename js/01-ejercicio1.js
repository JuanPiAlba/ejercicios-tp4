/*
Crear objetos
Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

*/

let objeto = {
  // propiedades key : value
  color: "Azul",
  marca: "Ford",
  modelo: "Fiesta",
  id: 14784859,
  // metodos
  encender: function () {
    document.write("<p>El auto se encendio.</p>");
  },
  apagar: function () {
    document.write("<p>El auto se apago.</p>");
  },
};

objeto.encender()
objeto.apagar()