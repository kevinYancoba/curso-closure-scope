//function scope
/**
 * el uso de "let" define variables que unicamente viven en su entorno y no
 * fuera de ellas en este caso unicamente vivie dentro de la funcion.
 */
function saludo() {
  let username = "kevin";
  console.log(username);

  if (username === "kevin") {
    // triple comparacion: tipoDato - valor
    console.log(`hola ${username}`);
  }
}
saludo();
console.log(username); //variable no definida
