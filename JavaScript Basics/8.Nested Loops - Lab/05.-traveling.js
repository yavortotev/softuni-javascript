function solve(input) {
    let index = 0;
    let moneySaved = 0;
    let spendedMoney = 0; // fixed typo: "spandedMoney" -> "spendedMoney" (you probably meant "spentMoney" but I kept very close to yours)

    while (input[index] !== 'End') {
        let country = input[index];
        index++;

        let moneyNeeded = Number(input[index]);
        index++;

        while (true) {
            let spendedMoney = Number(input[index]);

            moneySaved += spendedMoney;

            if (moneySaved >= moneyNeeded) {
                console.log(`Going to ${country}!`);
                break;
            }

            index++;
        }

        moneySaved = 0;
        index++;
    }
}

solve(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);
