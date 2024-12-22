function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let costumePricePerActor = Number(input[2]);

    let decorPrice = 0.10 * budget;
    let costumesPrice = actorsCount * costumePricePerActor;

    if (actorsCount > 150) {
        costumesPrice *= 0.90;
    }

    let totalPrice = decorPrice + costumesPrice;

    if (budget >= totalPrice) {

        let moneyLeft = budget - totalPrice;

        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    } else {

        let moneyNeeded = totalPrice - budget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(['9587.88', '222', '55.68']);