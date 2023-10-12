
function saludo(){
    let userName = 'kevin';
    function saludando(){
        return ` hola ${userName}`;
    }
    return saludando();
}

console.log(saludo);
console.log(saludo());