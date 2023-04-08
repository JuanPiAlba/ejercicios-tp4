/*

Agenda telefónica - Dificultad:  🟢🟡🔴

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda (YA)
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

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
    for (i = 0; i < this.Contactos.length; i++) {
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

  agregarContacto(contacto) {
    for (
      indiceContacto = 0;
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
