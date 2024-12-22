function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let place = '';
    let price = 0;

    switch (season) {

        case 'summer':
            if (budget <= 100) {
                destination = 'Bulgaria';
                price = 0.30 * budget;
            } else if (budget > 100 && budget <= 1000) {
                destination = 'Balkans';
                price = 0.40 * budget;
            }
            place = 'Camp';
            break;

        case 'winter':
            if (budget <= 100) {
                destination = 'Bulgaria';
                price = 0.70 * budget;

            } else if (budget <= 1000) {
                destination = 'Balkans';
                price = 0.80 * budget;
            }
            place = 'Hotel';
            break;
    }

    if (budget > 1000) {
        destination = 'Europe';
        price = 0.9 * budget;
        place = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);

}

journey(["1500", "summer"]);
