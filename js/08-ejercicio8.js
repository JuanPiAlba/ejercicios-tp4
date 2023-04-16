/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

class Persona {
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion=profesion
    }

    saludar() {
        document.write(`<p>Hola soy ${this.nombre}, tengo ${this.edad} años de edad y soy ${this.profesion}.<p>`)
    }

    despedirse(){
        document.write(`<p>Hasta luego ${this.nombre} que estes muy bien.</p>`)
    }
}

let Personas = [
    new Persona('Juan Pablo','23','empleado'),
    new Persona('Agustina','40','profesora')
]

Personas.forEach(persona => {persona.saludar()});

Personas.forEach(persona=>{persona.despedirse()})