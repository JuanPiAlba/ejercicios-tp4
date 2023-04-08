/*

6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
    
    #Isbn;
    #Titulo;
    #Autor;
    #NumerodePagina;

    constructor(isbn,titulo,autor,numerodepaginas){
        this.#Isbn=isbn;
        this.#Titulo=titulo;
        this.#Autor=autor;
        this.#NumerodePagina=numerodepaginas;
    }
    
    get isbn(){return this.#Isbn}
    set isbn(value){this.#Isbn=value;}
    
    get titulo(){return this.#Titulo}
    set titulo(value){this.#Titulo=value;}
    
    get autor(){return this.#Autor}
    set autor(value){this.#Autor=value;}
    
    get numerodepaginas(){return this.#NumerodePagina}
    set numerodepaginas(value){this.#NumerodePagina=value;}

    mostrarLibro(){
        document.write(`<p>“El libro ${this.#Titulo} con ISBN ${this.#Isbn} creado por el autor ${this.#Autor} tiene páginas ${this.#NumerodePagina}”</p>`)
    }
}

let Libros = [
    new Libro('1986', 'Harry Potter', 'J. K. Rowling', 1200),
    new Libro('1989', 'Harry Potter y el prisionero de azkabam', 'J. K. Rowling', 347),
]

Libros.forEach(Libro => {Libro.mostrarLibro()});