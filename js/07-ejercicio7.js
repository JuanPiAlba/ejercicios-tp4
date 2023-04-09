/*

Agenda telefónica - Dificultad:  🟢🟡🔴

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

agendarContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.(YA)

existeContacto(Contacto): indica si el contacto pasado existe o no.(YA)

listarContactos(): Lista toda la agenda (YA)

buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono. (YA)

eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla

agendaLlena(): indica si la agenda está llena.(YA)

huecosLibres(): indica cuántos contactos más podemos ingresar.(YA)


Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y por consola.

*/

class Contacto {
  #Nombre;
  #Telefono;

  constructor(nombre, telefono) {
    (this.Nombre = nombre), (this.Telefono = telefono);
  }

  get nombre() {
    return this.#Nombre;
  }
  set nombre(value) {
    this.#Nombre = value;
  }

  get telefono() {
    return this.#Telefono;
  }
  set telefono(value) {
    this.#Telefono = value;
  }
}

class agenda {
  constructor() {
    this.Contactos = new Array(10);
  }
  get contactos() {
    return this.Contactos;
  }

  set contactos(contactos) {
    if (contactos.length > 10) {
      document.write("No se pueden ingresar mas de 10 contactos.");
    }
    this.Contactos = contactos;
  }

  listarContactos() {
    this.Contactos.forEach((contacto) => {
      document.write(
        `<p>Nombre: ${contacto.Nombre} telefono: ${contacto.Telefono}</p>`
      );
    });
  }

  existeContacto(nombre) {
    //return this.Contactos.some(c => c && c.Nombre === nombre)
    for (let i = 0; i < this.Contactos.length; i++) {
      const contacto = this.Contactos[i];
      if (contacto && contacto.Nombre === nombre) {
        return true;
      }
    }
    return false;
  }

  agendaLlena() {
    if (this.Contactos.length === 10) {
      document.write("La agenda se encuentra llena");
    } else {
      document.write("La agenda no se encuentra llena");
    }
  }

  huecosLibre() {
    let result = 10 - this.Contactos.length;
    document.write(`Te quedan ${result} lugares`);
  }

  buscarContacto(nombre) {
    for (
     let indiceContacto = 0;
      indiceContacto < this.Contactos.length;
      indiceContacto++
    ) {
      if (this.Contactos[indiceContacto].Nombre === nombre) {
        return this.Contactos[indiceContacto];
      } else {
        return null;
      }
    }
  }

  eliminarContacto(nombre) {
    for (
      let indiceContacto = 0;
      indiceContacto < this.Contactos.length;
      indiceContacto++
    ) {
      if (this.Contactos[indiceContacto].Nombre === nombre) {
        this.Contactos[indiceContacto] = null;
        document.write(`El contacto ${nombre} fue borrado con exito.`);
      } else {
        document.write(`El contacto ${nombre} no se pudo borrar.`);
      }
    }
  }

  agregarContacto(contacto) {
    for (
     let indiceContacto = 0;
      indiceContacto < this.Contactos.length;
      indiceContacto++
    ) {
      if (!this.Contactos[indiceContacto]) {
        if (!(contacto instanceof Contacto)) {
          document.write("Agregar no es un contacto");
          return;
        }
        if (!this.existeContacto(contacto.Nombre)) {
          this.Contactos[indiceContacto] = contacto;
          break;
        } else {
          document.write("El contacto ya existe.");
          break;
        }
      }
    }
  }
}

const miAgenda = new agenda();
let opcion;

do {opcion = prompt("Seleccione una opción:\n1. Agregar contacto \n 2. Buscar contacto \n 3. Eliminar contacto \n 4. Agenda llena \n 5.Huecos Agendan \n 6.Listar Contactos \n 7.Salir");

  switch (opcion) {
    case "1":
      const nombre = prompt("Ingrese el nombre del contacto:");
      const telefono = prompt("Ingrese el número de teléfono del contacto:");
      const nuevoContacto = new Contacto(nombre, telefono);
      let indice;

      do {indice = parseInt(prompt("Ingrese la posición en la que desea agregar el contacto (0-9):"));
         } while (isNaN(indice) || indice < 0 || indice > 9);
      miAgenda.agregarContacto(nuevoContacto, indice);
      
      alert(`Contacto ${nombre} agregado con éxito en la posición ${indice}.`);
      break;

    case "2":
      const nombreBuscar = prompt(
        "Ingrese el nombre del contacto que desea buscar:");
      const contactoEncontrado = miAgenda.buscarContacto(nombreBuscar);
      if (contactoEncontrado) {
        alert(`Nombre: ${contactoEncontrado.nombre}\nTeléfono: ${contactoEncontrado.telefono}`);
      } else {
        alert(`No se encontró un contacto con el nombre ${nombreBuscar}.`);
      }
      break;

    case "3":
      const nombreEliminar = prompt("Ingrese el nombre del contacto que desea eliminar:");
      const eliminado = miAgenda.eliminarContacto(nombreEliminar);
      if (eliminado) {
        alert(`Contacto ${nombreEliminar} eliminado con éxito.`);
      } else {
        alert(`No se encontró un contacto con el nombre ${nombreEliminar}.`);
      }
      break;

    case "4":
      miAgenda.agendaLlena();
      alert('Al salir de le programa te indicara si la agenda se encuentra llena o no.');
      break;
    
     case "5":
     miAgenda.huecosLibre();
     alert(`Te quedan un total de ${result} huecos libres.`);
     break;

     case "6":
      miAgenda.listarContactos();
      alert('Contactos escritos en el docuentos, al salir se listaran los contactos.');
      break;

     case "7":       
       alert("Saliendo de el programa...");
       break;      

    default:
      alert("Opción inválida. Intente nuevamente.");
  }
} while (opcion !== "7");

