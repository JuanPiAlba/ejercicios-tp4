/*
Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡

2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:

Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.

Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/
let cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    cuenta.saldo += cantidad;
    document.write(`<p>Se ha ingresado ${cantidad} a la cuenta bancaria.</p>`);
  },

  extraer: function (cantidad) {
    if (cantidad > cuenta.saldo) {
      document.write(
        "No se puede realizar la extraccion por no tener saldo suficuente"
      );
    } else {
      cuenta.saldo -= cantidad;
      document.write(`<p>Se ha extraido ${cantidad} a la cuenta bancaria.</p>`);
    }
  },

  informar: function(){
    document.write(`<p>El titular ${cuenta.titular} de la cuenta es </p>`)
    document.write(`<p>El saldo de la cuenta es ${cuenta.saldo} </p>`)
  }
};

cuenta.ingresar(100)
cuenta.extraer(50)
cuenta.informar()