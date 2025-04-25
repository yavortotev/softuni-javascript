function solve(input) {

    let n = Number(input[0]);
    let buff = " ";
    
    for (let i = 1000; i <= 9999; i++) {
        let iString = String(i);

        if (iString[0] !== '0' && iString[1] !== '0' && iString[2] !== '0' && iString[3] !== '0') {
           
            let first2Letters = Number(iString[0]) + Number(iString[1]);
            let second2Letters = Number(iString[2]) + Number(iString[3]);
    
            if (first2Letters === second2Letters && n % first2Letters === 0) {
                buff += iString + " ";
            }
        }
    }

    console.log(buff);
}

solve(['7']);