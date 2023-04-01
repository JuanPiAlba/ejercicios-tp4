/*
Generaciones - Dificultad:  🟢🟡🔴

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

*/

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anio) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    if (sexo == "H") {
      this.sexo = "Hombre";
    } else if (sexo == "M") {
      this.sexo = "Mujer";
    }
    this.peso = peso;
    this.altura = altura;
    this.anio = anio;
  }
  mostrarGeneracion() {
    if (this.anio >= 1930 && this.anio <= 1948) {
      document.write(
        `<p>La persona ${this.sexo} ${this.nombre} pertenece a la generacion SIlent Generation y son Auteros</p>`
      );
    }
    if (this.anio >= 1949 && this.anio <= 1968) {
      document.write(
        `<p>La persona ${this.sexo} ${this.nombre} pertenece a la generacion Baby Boom y son Ambiciosos</p>`
      );
    }
    if (this.anio >= 1969 && this.anio <= 1980) {
      document.write(
        `<p>La persona ${this.sexo} ${this.nombre} pertenece a la generacion X y son Obsesivos por el exito</p>`
      );
    }
    if (this.anio >= 1981 && this.anio <= 1993) {
      document.write(
        `<p>La persona ${this.sexo} ${this.nombre} pertenece a la generacion Y y son Frustrados</p>`
      );
    }
    if (this.anio >= 1994 && this.anio <= 2010) {
      document.write(
        `<p>La persona es ${this.sexo} ${this.nombre} pertenece a la generacion Z y son Mal Educados</p>`
      );
    }
  }
}

let Personas = [
  new Persona("Sebastian", 36, "32493340", "H", 140, 180, 1987),
  new Persona("Juan Pablo", 36, "32493340", "H", 140, 180, 1970),
];

Personas.forEach((element) => {
  element.mostrarGeneracion();
});
