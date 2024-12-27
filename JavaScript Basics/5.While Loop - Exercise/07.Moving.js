function solve(input){

    let weith = Number(input[0]);
    let hight = Number(input[1]);
    let lenght = Number(input[2]);
    let index = 3
    let totalBoxesSpace=0
    let isSpaceEnough =0

    let totalFreeSapce = weith * hight * lenght

    while(input[index]!=='Done'){
        boxes = Number(input[index])*1
        totalBoxesSpace+=boxes

        if (totalBoxesSpace>totalFreeSapce){
            isSpaceEnough = 1
            break;
        }


     index++
    }


    if (isSpaceEnough ===1){
        let cubinNeed =totalBoxesSpace-totalFreeSapce
        console.log(`No more free space! You need ${cubinNeed} Cubic meters more.`);
    }else{
        let cubikLeft=totalFreeSapce-totalBoxesSpace
        console.log(`${cubikLeft} Cubic meters left.`);
    }

}

solve(["10",

"10",

"2",
"20", 
"20", "20", "20", "122"])