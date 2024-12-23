function cleverLily(input){

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let saveMoney = 0;

    let birthdayMoney = 10;

    for( birthday = 1; birthday <= age; birthday++){

        if(birthday % 2 === 0){

        saveMoney += (birthdayMoney - 1);  
        birthdayMoney +=10;
    }else{
        saveMoney += toyPrice
    }
    
    
}

    if (saveMoney >= washerPrice){
        moneyleft = saveMoney - washerPrice
        console.log(`Yes! ${moneyleft.toFixed(2)}`)
    }else{
        moneyNeed = washerPrice - saveMoney
        console.log(`No! ${moneyNeed.toFixed(2)}`)
    }

}

cleverLily(["10","170.00","6"])