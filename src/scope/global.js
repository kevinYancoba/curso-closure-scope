//variables
/**
 * usamos "var" para el uso de variables globales que se puede acceder desde
 * cualquier parte del codigo.
 */

var a; //declarando
var b = "b"; // declaramos y asignamos
b = "bb"; //reasignacion
var a = 12; //redeclaracion

//global scope
var fruta = "manzana";
console.log(fruta);

function mejorFruto() {
  console.log(fruta);
}
mejorFruto();

function paises() {
  pais = "Guatemala"; // variable global
  console.log(pais);
}

paises();
console.log(pais);
