function solve(input) {

    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combination = 0;
    let sum = 0;

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            combination++;
            sum = x + y;
            if (sum === magicNumber) {
                console.log(`Combination N:${combination} (${x} + ${y} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${combination} combinations - neither equals ${magicNumber}`);
}


solve(["1","10","5"])
