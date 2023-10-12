// caja de ahorro
/*
function moneyBox(dinero){
    let ahorro = 0;
    ahorro += dinero;
    console.log(`tu ahorro: $ ${ahorro}`);
}

moneyBox(10);
moneyBox(10);
*/

//forma correcta de programar para manterner el alcance lexico
function moneyBox(){
    let saveCoins = 0;
    function incrementador(coins){
        saveCoins += coins;
        console.log(`coins: $${saveCoins}`)
    }
    return incrementador;
}

const myMoneyBox = moneyBox();
myMoneyBox(19);
myMoneyBox(11);
myMoneyBox(110);

const myMoneyBox2 = moneyBox();
myMoneyBox2(40);
myMoneyBox2(10);
myMoneyBox2(60);



