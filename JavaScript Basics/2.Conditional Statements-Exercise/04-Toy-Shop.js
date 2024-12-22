function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let moneyWon = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        moneyWon = 0.75 * moneyWon;
    }

    moneyWon = 0.9 * moneyWon;

    if (moneyWon >= tripPrice) {
        let moneyLeft = moneyWon - tripPrice;

        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
