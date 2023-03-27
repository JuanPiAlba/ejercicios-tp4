/*

Rectángulos

Dificultad:  🟢

3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

*/
let rectangulos = {

  //propiedades
  alto: 8,
  ancho: 6,

  //metodos->modificar propiedades, calcular perimetro (alto*2+ancho*2), calcular area (alto x ancho)
  modificaralto: function () {
    rectangulos.alto = nuevoAlto;
  },
  modificarancho: function () {
    rectangulos.ancho = nuevoAncho;
  },
  mostrarpropiedades: function () {
    document.write(`<p>El Alto es ${this.alto} y el ancho es ${this.ancho}</p>`);
  },
  calcularperimetro: function () {
    let perimetro = this.alto+this.alto+this.ancho+this.ancho
    document.write(`<p>El perimetro de el rectangulo es ${perimetro}</p>`);
  },
  calculararea: function () {
    let area = this.alto * this.ancho;
    document.write(`<p>El Area de el rectangulo es ${area}</p>`);
  },  
};

rectangulos.mostrarpropiedades()
rectangulos.calculararea()
rectangulos.calcularperimetro()


// Ejemplo de uso de la clase Rectangulo
let rectangulo1 = Object.create(rectangulos)
rectangulo1.mostrarPropiedades(); // Ancho: 5, Alto: 10

rectangulo1.modificarAncho(7);
rectangulo1.modificarAlto(12);
rectangulo1.mostrarPropiedades(); // Ancho: 7, Alto: 12

rectangulo1.calcularPerimetro(); // El perímetro del rectángulo es 38
rectangulo1.calcularArea(); // El área del rectángulo es 84