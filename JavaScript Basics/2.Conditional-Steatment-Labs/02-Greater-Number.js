function greaterNumber(input){

    let  num1 = Number(input[0]);
    let num2 = Number(input[1]);

    if (num1 > num2){
        console.log(num1)
    }else{
        console.log(num2)
    }


     //ternary operator: 
    //console.log( num1>num2 ? num1 : num2);
    

}

console.log();


greaterNumber(['10','11'])