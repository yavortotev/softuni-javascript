function solve(input) {

    let endNumber1 = Number(input[0]);
    let endNumber2 = Number(input[1]);
    let endNumber3 = Number(input[2]);

    let number = 0;
    let isPrime = true;

    for (let i = 1; i <= endNumber1; i++) {
        if (i % 2 === 0) {
            number += i * 100;

            for (let y = 2; y <= endNumber2; y++) {
                for (let prime = 2; prime < y; prime++) {
                    if (y % prime === 0) {
                        isPrime = false;
                    }
                }

                if (isPrime === true) {
                    number += y * 10;

                    for (let x = 1; x <= endNumber3; x++) {
                        if (x % 2 === 0) {
                            number += x;
                            console.log(`${i} ${y} ${x}`);
                            number -= x;
                        }
                    }

                    number -= y * 10;
                }

                isPrime = true;
            }

            number -= i * 100;
        }
    }
}



solve(['8', '2', '8']);