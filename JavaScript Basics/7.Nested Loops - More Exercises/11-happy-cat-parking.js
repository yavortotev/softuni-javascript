function solve(input) {

    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);
    let price = 0;
    let daysCalculate = 0;
    let totalPriceDay = 0;

    for (let days = 1; days <= daysCount; days++) {
        daysCalculate++;

        for (let hours = 1; hours <= hoursCount; hours++) {

            if (hours % 2 !== 0 && days % 2 === 0) {
                price += 2.5;
            } else if (hours % 2 === 0 && days % 2 !== 0) {
                price += 1.25;
            } else {
                price += 1;
            }
        }

        totalPriceDay += price;

        console.log(`Day: ${days} - ${price.toFixed(2)} leva`);

        price = 0;
    }

    console.log(`Total: ${totalPriceDay.toFixed(2)} leva`);
}

solve(['2','5'])