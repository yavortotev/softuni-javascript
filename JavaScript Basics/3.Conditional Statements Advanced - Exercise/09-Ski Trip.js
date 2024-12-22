function skiTrip(input) {

    let days = Number(input[0]);
    let spaceType = input[1];
    let review = input[2];

    let nights = days - 1;
    let price = 0;

    switch (spaceType) {

        case 'room for one person':
            price = 18 * nights;
            break;

        case 'apartment':
            price = 25 * nights;

            if (nights < 10) {
                price *= 0.7;
            } else if (nights <= 15) {
                price *= 0.65;
            } else {
                price *= 0.5;
            }
            break;

        case 'president apartment':
            price = 35 * nights;

            if (nights < 10) {
                price *= 0.90;
            } else if (nights <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;
    }

    if (review === 'positive') {
        price *= 1.25;
    } else {
        price *= 0.9;
    }

    console.log(price.toFixed(2));
}

skiTrip(["30", "president apartment", "negative"]);
