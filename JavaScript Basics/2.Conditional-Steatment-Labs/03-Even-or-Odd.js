function  evenOrOdd(input){

    let num = Number(input[0]);

    if (num % 2 === 0){
        console.log('even')
    }else{
        console.log('odd')
    }
}



console.log(num % 2 === 0 ? 'even' : 'odd');


evenOrOdd(['1024'])