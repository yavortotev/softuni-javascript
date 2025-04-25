function solve(input) {

    let numberOnes = Number(input[0]);
    let numberTwos = Number(input[1]);
    let numberFives = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= numberOnes; i++) {
        for (let y = 0; y <= numberTwos; y++) {
            for (let k = 0; k <= numberFives; k++) {

                if ((i * 1 + y * 2 + k * 5) === sum) {
                    console.log(`${i} * 1 lv. + ${y} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

solve(['3', '2', '3', '10']);
