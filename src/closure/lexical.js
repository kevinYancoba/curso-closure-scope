const global = 8;
function myFunction() {
  const myNumber = 5;
  console.log(global);

  function padre() {
    const inner = 12;
    console.log(global, myNumber);

    function hijo() {
      console.log(inner,myNumber, global);
    }
  	return hijo();
  }
	return padre();
}

myFunction();

function sumWithClosure(firstNum) {
  function suma(secundNum = 0){
    return firstNum + secundNum; 
  }
  return suma;
}

console.log(sumWithClosure(2)(3));
console.log(sumWithClosure(90)());