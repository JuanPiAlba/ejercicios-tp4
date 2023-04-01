/*

Producto - Dificultad:  🟢🟡

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDato() {
    document.write(
      `<p>El codigo es ${this.codigo} el nombre es ${this.nombre} y el precio es ${this.precio} </p>`
    );
  }
}

let productos = [
  new Producto(1, 'Jabon', 1000),
  new Producto(1, 'Shampoo', 900),
  new Producto(1, 'Enjuague', 800),
];

productos.forEach(producto => {
    producto.imprimeDato();
});

for(let p of productos){
    p.imprimeDato()
}