function solve(input) {

    let magicNumber = Number(input[0]);
    let possibleCombinations = 0;
    let finalString = "";
    let password = "";
    let isPassword = false;
    let isNumber = false;

    for (let i = 1000; i < 10000; i++) {

        let number = String(i);

        if ((Number(number[0]) > 0) && (Number(number[1]) > 0) && (Number(number[2]) > 0) && (Number(number[3]) > 0)) {

            if ((Number(number[0]) * Number(number[1])) + (Number(number[2]) * Number(number[3])) === magicNumber) {

                if ((Number(number[0]) < Number(number[1])) && (Number(number[2]) > Number(number[3]))) {

                    isNumber = true;
                    possibleCombinations++;
                    finalString += number + " ";

                    if (possibleCombinations === 4) {
                        password = number;
                        isPassword = true;
                    }
                }
            }
        }
    }

    if (isNumber === true) {
        console.log(finalString);
    }

    if (isPassword === true) {
        console.log(`Password: ${password}`);
    } else {
        console.log(`No!`);
    }
}

solve(['11']);
