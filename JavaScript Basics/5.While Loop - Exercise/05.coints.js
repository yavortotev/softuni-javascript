function solve (input){

    let change =Number(input[0]);

    let cents = Math.round(change*100)
    let totalCointUsed = 0;

    while(cents > 0){


        if(cents >= 200){
            cents-=200;
            totalCointUsed++;
        }else if(cents >=100 && cents < 200){
            cents-=100;
            totalCointUsed++;
        }else if(cents >=50 && cents <100){
            cents-=50;
            totalCointUsed++;
        }else if (cents >=20 && cents <50){
            cents-=20;
            totalCointUsed++;
        }else if (cents >=10 && cents <20){
            cents-=10
            totalCointUsed++

        }else if (cents >= 5 && cents < 10){
            cents-=5
            totalCointUsed++
        }else if (cents >= 2 && cents < 5){
            cents-=2
            totalCointUsed++
        }else if (cents >= 1 && cents < 2){
            cents-=1
            totalCointUsed++
        }
    }

    console.log(totalCointUsed);


}
solve(['2.73'])