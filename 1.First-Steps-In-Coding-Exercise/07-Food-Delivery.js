function foodDelivery(input){

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vaggieMenu = Number(input[2]);
   
    let desertPrice = 0.2 * (chickenMenu * 10.35 + fishMenu * 12.4 + vaggieMenu * 8.15)
   
    let totalSum = (chickenMenu * 10.35) + (fishMenu * 12.4) + (vaggieMenu * 8.15) + desertPrice + 2.5
    
    console.log(totalSum)
   
   
   
   }
   foodDelivery(['2','4','3'])