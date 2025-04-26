function solve(input) {

    let startNumber1 = Number(input[0]);
    let startNumber2 = Number(input[1]);
    let endNumber1 = Number(input[2]) + startNumber1;
    let endNumber2 = Number(input[3]) + startNumber2;

    let isFirstPairPrime = true;
    let isSecondPrime = true;

    for (let i = startNumber1; i <= endNumber1; i++) {
        for (let y = 2; y < i; y++) {
            if (i % y === 0) {
                isFirstPairPrime = false;
                break;
            }
        }

        if (isFirstPairPrime === true) {
            for (let x = startNumber2; x <= endNumber2; x++) {
                for (let s = 2; s < x; s++) {
                    if (x % s === 0) {
                        isSecondPrime = false;
                        break;
                    }
                }

                if (isSecondPrime === true) {
                    console.log(`${i}${x}`);
                }
                isSecondPrime = true;
            }
        }
        isFirstPairPrime = true;
    }
}

solve(["10", "20", "5", "5"]);
