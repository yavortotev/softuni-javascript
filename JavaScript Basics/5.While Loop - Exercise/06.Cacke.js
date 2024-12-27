function solve(input){


    let weightCake = Number(input[0]);
    let highCake = Number(input[1]);
    
    let sizeCake = 1*1;
    let cakePeaces = (weightCake * highCake) / sizeCake;
    let peaceOfEatenCake = 0;
    let isCakeDone =0
    
    
    let index= 2;
    
    while(input[index]!=='STOP'){
      
        peaceOfCake = Number(input[index])
        peaceOfEatenCake+=peaceOfCake;
    
        if (peaceOfEatenCake > cakePeaces){
            isCakeDone =1
           
    
            break;
        }
    
    
     index++   
    }
    
     if (isCakeDone ===1){
        let cakePeacesNeeded = peaceOfEatenCake - cakePeaces
        console.log(`No more cake left! You need ${cakePeacesNeeded} pieces more.`);
     }else{
        let cakePeasesLeft = cakePeaces-peaceOfEatenCake
        console.log(`${cakePeasesLeft} pieces are left.`);
     }
    
    
    }
    solve(["10",
    
    "10",
    
    "20",
    
    "20",
    "20", 
    "20", 
    "21"])