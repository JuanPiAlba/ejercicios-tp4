/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Perro extends Animal {
  constructor(nombre, edad, animal, sonido) {
    super(nombre, edad);
    this.animal = animal;
    this.sonido = sonido;
  }
  emitirSonido1() {
    document.write(
      `Hola me llamo ${this.nombre}, tengo ${this.edad} años de edad y soy un lindo ${this.animal} y hago ${this.sonido}.`
    );
  }
}

class Gato extends Animal {
  #animal;
  #sonido;
  constructor(nombre, edad, animal, sonido) {
    super(nombre, edad);
    this.#animal = animal;
    this.#sonido = sonido;
  }

  get animal() {
    return this.#animal;
  }

  set animal(nuevoAnimal){
    this.#animal=nuevoAnimal
  }

  get sonido(){
    return this.#sonido
  }

  set sonido(nuevoSonido){
    this.#sonido = nuevoSonido
  }

  emitirSonido1() {
    document.write(
      `<p>Hola me llamo ${this.nombre} , tengo${this.edad} años de edad soy un lindo ${this.animal} y hago ${this.sonido}.</p>`
    );
  }  
}

const Caninos = new Perro("Toby", "2", "perrito", "guau");
const felinos = new Gato('Michifu', '7','gatito','miau')

Caninos.emitirSonido1();
felinos.emitirSonido1();