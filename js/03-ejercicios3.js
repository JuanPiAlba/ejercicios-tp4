/*

Rectángulos

Dificultad:  🟢

3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

*/
class rectangulos {

  //propiedades
  constructor(alto,ancho){
    this.alto=alto;
    this.ancho=ancho;
  }

  //metodos->modificar propiedades, calcular perimetro (alto*2+ancho*2), calcular area (alto x ancho)
  modificaralto() {
    return this.alto = this.alto
  }
  modificarancho() {
    return this.ancho = this.ancho;
  }
  mostrarpropiedades() {
    document.write(`<p>El Alto es ${this.alto} y el Ancho es ${this.ancho}</p>`);
  }
  calcularperimetro() {
    let perimetro = this.alto+this.alto+this.ancho+this.ancho
    document.write(`<p>El perimetro de el rectangulo es ${perimetro}</p>`);
  }
  calculararea() {
    let area = this.alto * this.ancho;
    document.write(`<p>El Area de el rectangulo es ${area}</p>`);
  }
};

let rectangulo1= new rectangulos(5,7)
rectangulo1.mostrarpropiedades()
rectangulo1.calculararea()
rectangulo1.calcularperimetro()

rectangulo1.modificarancho(7);
rectangulo1.modificaralto(12);
rectangulo1.mostrarpropiedades(); // Ancho: 7, Alto: 12

rectangulo1.calcularperimetro(); // El perímetro del rectángulo es 38
rectangulo1.calculararea(); // El área del rectángulo es 84