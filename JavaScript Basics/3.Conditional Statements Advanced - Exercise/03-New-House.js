function newHouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowerType) {
        case 'Roses':
            price = flowerCount * 5;
            break;

        case 'Dahlias':
            price = flowerCount * 3.80;
            break;

        case 'Tulips':
            price = flowerCount * 2.80;
            break;

        case 'Narcissus':
            price = flowerCount * 3;
            break;

        case 'Gladiolus':
            price = flowerCount * 2.5;
            break;
    }

    if (flowerType === 'Roses' && flowerCount > 80) {
        price = 0.9 * price;
    } else if (flowerType === 'Dahlias' && flowerCount > 90) {
        price = 0.85 * price;
    } else if (flowerType === 'Tulips' && flowerCount > 80) {
        price = 0.85 * price;
    } else if (flowerType === 'Narcissus' && flowerCount < 120) {
        price = 1.15 * price;
    } else if (flowerType === 'Gladiolus' && flowerCount < 80) {
        price = 1.2 * price;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = price - budget;

        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus", "119", "360"]);
