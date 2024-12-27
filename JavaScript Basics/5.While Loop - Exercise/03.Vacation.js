function solve(input){


    let vacationPrice = Number(input[0])

    let moneySheHave = Number(input[1]);

    let moneySaved =moneySheHave 

    let daysCount=0
    let daysMoneySpedCounter = 0
    let isIt5days=0

    index=2

    while( moneySaved < vacationPrice){
        daysCount++

        saveOrno = input[index]
        money= Number(input[index+1])

        if(saveOrno === 'spend'){
            if (moneySaved - money <=0){
                moneySaved =0
                daysMoneySpedCounter++
            }else{
            moneySaved-=money
            daysMoneySpedCounter++
            }

        }else if (saveOrno === 'save'){
            moneySaved+=money
            daysMoneySpedCounter=0

        }

        if (daysMoneySpedCounter===5){
            isIt5days=1;
            break;

        }
        
        index+=2
    }


        if (isIt5days === 1){
            console.log("You can't save the money.")
            console.log(daysCount);
        }else{
    console.log(`You saved the money for ${daysCount} days.`);
        }

}

solve(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10",
"spend",
 "10"])