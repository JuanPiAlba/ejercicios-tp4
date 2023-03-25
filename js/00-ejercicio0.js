/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : (este ej. debe formar parte del tp4)
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez
*/

//genero la funcion de un numero aleatorio para jugar con la maquina

function aleatorio(minimo, maximo) {
  let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

let piedra = 0;
let papel = 1;
let tijera = 2;

let opciones = ["piedra", "papel", "tijera"];

let opcioneUsuario;
let opcionMaquina = aleatorio(0, 2);

opcioneUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste: " + opciones[opcioneUsuario]);
alert("La pc Eligio: " + opciones[opcionMaquina]);

document.write(`<p>Elegiste ${opcioneUsuario}</p>`);
document.write(`<p>La maquina Eligio ${opcionMaquina}</p>`);

if (opcioneUsuario == piedra) {
  if (opcionMaquina == piedra) {
    document.write("Empate");
  }
  if (opcionMaquina == papel) {
    document.write("Perdiste contra -> Papel de la maquina.");
  }
  if (opcionMaquina == tijera) {
    document.write("Ganaste -> La maquina habia elegido tijeras.");
  }
}
if (opcioneUsuario == papel) {
  if (opcionMaquina == piedra) {
    document.write("Ganaste -> La maquina habia elegido tijeras.");
  }
  if (opcionMaquina == papel) {
    document.write("Empate");
  }
  if (opcionMaquina == tijera) {
    document.write("Perdiste contra -> Tijeras de la maquina.");
  }
}
if (opcioneUsuario == tijera) {
  if (opcionMaquina == piedra) {
    document.write("Perdiste contra -> Piedras de la maquina.");
  }
  if (opcionMaquina == papel) {
    document.write("Ganaste -> La maquina habia elegido papel.");
  }
  if (opcionMaquina == tijera) {
    document.write("Empate");
  }
}
