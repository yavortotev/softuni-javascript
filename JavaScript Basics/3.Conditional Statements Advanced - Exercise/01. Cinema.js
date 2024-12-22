function cinema(input) {

    let cinemaType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let fullCinema = rows * columns;

    let moneyWon = 0;

    switch (cinemaType) {
        case 'Premiere':
            moneyWon = 12 * fullCinema;
            console.log(`${moneyWon.toFixed(2)} leva.`);
            break;
        case 'Normal':
            moneyWon = 7.5 * fullCinema;
            console.log(`${moneyWon.toFixed(2)} leva.`);
            break;
        case 'Discount':
            moneyWon = 5.00 * fullCinema;
            console.log(`${moneyWon.toFixed(2)} leva.`);
            break;
    }

}

cinema(["Discount", "12", "30"]);
