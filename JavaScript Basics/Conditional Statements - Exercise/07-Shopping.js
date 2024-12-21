function Shopping(input) {

    let petersBudget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let videoCardPrice = videoCardCount * 250;
    let processorsPrice = (0.35 * videoCardPrice) * processorsCount;
    let ramMemoryPrice = (0.10 * videoCardPrice) * ramMemoryCount;

    let totalPrice = videoCardPrice + processorsPrice + ramMemoryPrice;

    if (videoCardCount >= processorsCount) {
        totalPrice = 0.85 * totalPrice;
    }

    if (totalPrice <= petersBudget) {
        let moneyLeft = petersBudget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - petersBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

Shopping(['920.45', '3', '1', '1']);
