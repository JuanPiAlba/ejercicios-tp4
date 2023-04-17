/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.


(Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.)

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Personas {
  constructor(nombre, edad) {
    this.Nombre = nombre;
    this.Edad = edad;
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listapasajeros) {
    this.Nombre = nombre;
    this.Capacidad = capacidad;
    this.Destino = destino;
    this.ListaPasajeros = [0];
  }

  abordar(persona) {
    if (this.ListaPasajeros.length < this.Capacidad) {
      this.ListaPasajeros.push(persona);
    } else {
      document.write("No hay lugar en el pajarito");
      this.ListaPasajeros.shift();
    }
  }
}

class Aeropuerto {
  constructor(nombreAeropuerto, listaAviones) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(miAvion) {
    let avion = this.listaAviones.find((avion) => avion.nombre === miAvion);
    if (avion != null) {
      return avion;
    } else {
      document.write("no existe el avion");
    }
  }
}

let Persona = [
  new Personas("Juan Pablo", "23"),
  new Personas("Agustina", "40"),
  new Personas("Sebastian", "35"),
];

let avion1 = new Avion("Boing", 1000, "Tucuman");
let avion2 = new Avion("flybondy", 2, "Buenos Aires");
let avion3 = new Avion("Aerolineas Argentina", 100, "Mar del Plata");

Persona.forEach((element) => {avion1.abordar(element);});
Persona.forEach((element) => {avion2.abordar(element);});
Persona.forEach((element) => {avion3.abordar(element);});

let Aeropuerto1 = new Aeropuerto("Aeropuerto Internacional");

Aeropuerto1.agregarAvion(avion1);
console.log(Aeropuerto1);
