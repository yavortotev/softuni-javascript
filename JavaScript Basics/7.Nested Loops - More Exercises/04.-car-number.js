function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let finalString = "";

    for (let number = 1000; number <= 9999; number++) {
        let stringNumber = String(number);

        if (
            (Number(stringNumber[0]) >= start && Number(stringNumber[0]) <= end) &&
            (Number(stringNumber[1]) >= start && Number(stringNumber[1]) <= end) &&
            (Number(stringNumber[2]) >= start && Number(stringNumber[2]) <= end) &&
            (Number(stringNumber[3]) >= start && Number(stringNumber[3]) <= end)
        ) {
            if (
                (Number(stringNumber[0]) % 2 === 0 && Number(stringNumber[3]) % 2 !== 0) ||
                (Number(stringNumber[0]) % 2 !== 0 && Number(stringNumber[3]) % 2 === 0)
            ) {
                if (Number(stringNumber[0]) > Number(stringNumber[3])) {
                    if ((Number(stringNumber[1]) + Number(stringNumber[2])) % 2 === 0) {
                        finalString += stringNumber + " ";
                    }
                }
            }
        }
    }

    console.log(finalString);
}

solve(["2", "3"]);
