/**
 *Block scope
 *bloques : esta definidos por lo contenido dentro de  { }
 */

function frutas() {
  if (true) {
    var fruta1 = "manzana"; // function scope
    let fruta2 = "naranja"; //block scope
    const fruta3 = "banana"; //block scope
    console.log(fruta2);
    console.log(fruta3);
  }
  console.log(fruta1);
}

frutas();
