/*
Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

Mostrar la tabla completa

filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
*/

let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

function creartabla() {
  // Crear el elemento de tabla
  var table = document.createElement("table");

  // Crear la fila de encabezado
  var headerRow = document.createElement("tr");
  var header1 = document.createElement("th");
  var header1Text = document.createTextNode("NombreProducto");
  header1.appendChild(header1Text);
  headerRow.appendChild(header1);
  var header2 = document.createElement("th");
  var header2Text = document.createTextNode("Precio");
  header2.appendChild(header2Text);
  headerRow.appendChild(header2);
  var header3 = document.createElement("th");
  var header3Text = document.createTextNode("Categoria");
  header3.appendChild(header3Text);
  headerRow.appendChild(header3);
  table.appendChild(headerRow);

  // Iterar sobre los objetos y crear las filas y celdas correspondientes

  for (var i = 0; i < listaProductos.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell1Text = document.createTextNode(listaProductos[i].nombreProducto);
    cell1.appendChild(cell1Text);
    row.appendChild(cell1);
    var cell2 = document.createElement("td");
    var cell2Text = document.createTextNode(listaProductos[i].precio);
    cell2.appendChild(cell2Text);
    row.appendChild(cell2);
    var cell3 = document.createElement("td");
    var cell3Text = document.createTextNode(listaProductos[i].categoria);
    cell3.appendChild(cell3Text);
    row.appendChild(cell3);
    table.appendChild(row);
  }

  // Agregar la tabla al documento
  document.body.appendChild(table);
}

document.write(creartabla());

function filtrarProductosPorCategoria(listaProductos, categoria) {
  return listaProductos.filter(
    (listaProductos) => listaProductos.categoria === categoria
  );
}

let copiaListaProducto = listaProductos

listaProductos = filtrarProductosPorCategoria(
  listaProductos,
  "Protector solar"
);

document.write(creartabla());

listaProductos = copiaListaProducto

listaProductos = filtrarProductosPorCategoria(listaProductos, "Sérum");

document.write(creartabla());

listaProductos=copiaListaProducto
listaProductos=filtrarProductosPorCategoria(listaProductos,"Bruma");
if(listaProductos.length>0){
  document.write(creartabla());
  }else{
    document.write('La categoria bruma no existe')
  }