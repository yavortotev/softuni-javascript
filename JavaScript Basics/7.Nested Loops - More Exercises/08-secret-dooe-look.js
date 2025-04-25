function solve(input) {

    let end1loop = Number(input[0]);
    let end2loop = Number(input[1]);
    let end3loop = Number(input[2]);

    let isPrime = true;

    for (let i = 100; i <= 999; i++) {

        let numberString = String(i);

        if (
            (Number(numberString[0]) >= 1 && Number(numberString[0]) <= end1loop) &&
            (Number(numberString[1]) >= 2 && Number(numberString[1]) <= end2loop) &&
            (Number(numberString[2]) >= 1 && Number(numberString[2]) <= end3loop)
        ) {

            if (Number(numberString[0]) % 2 === 0) {
                if (Number(numberString[2]) % 2 === 0) {

                    for (let y = 2; y < Number(numberString[1]); y++) {
                        if (Number(numberString[1]) % y === 0) {
                            isPrime = false;
                            break;
                        }
                    }

                    if (isPrime === true) {
                        console.log(`${numberString[0]} ${numberString[1]} ${numberString[2]}`);
                    }

                    isPrime = true;
                }
            }
        }
    }
}

solve(['3', '5', '5']);
