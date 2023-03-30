/*
Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.
*/

let calculadora = {
    num1:0,
    num2:0,

    suma: function(){
        return this.num1+this.num2;
    },

    resta: function(){
        return this.num1-this.num2
    },

    multiplicacion: function(){
        return this.num1*this.num2
    },

    division: function(){
        if(this.num2!=0){
            return this.num1/this.num2
        }else{
            return 'No se puede dividir en 0'
        }
    }
}

calculadora.num1=5;
calculadora.num2=7;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Suma 1: '+calculadora.suma())

calculadora.num1=10;
calculadora.num2=8;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Suma 2:  '+calculadora.suma())

calculadora.num1=5;
calculadora.num2=7;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Resta 1: '+calculadora.resta())

calculadora.num1=8;
calculadora.num2=5;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Resta 2:  '+calculadora.resta())
calculadora.num1=5;
calculadora.num2=7;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Multiplicacion 1: '+calculadora.multiplicacion())

calculadora.num1=10;
calculadora.num2=8;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Multiplicacion 2:  '+calculadora.multiplicacion())

calculadora.num1=10;
calculadora.num2=2;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Division 1: '+calculadora.division())

calculadora.num1=10;
calculadora.num2=0;

document.write( `<br>Los numero son ${calculadora.num1} y ${calculadora.num2}`)

document.write('<br>Division 2:  '+calculadora.division())



