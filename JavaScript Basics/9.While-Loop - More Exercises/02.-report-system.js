function solve(input) {
    let moneyNeeded = Number(input[0]);
    let index = 1;
    let totalCash = 0;
    let totalCard = 0;
    let cashCount = 0;
    let cardCount = 0;
    let totalCollected = 0;
    let paymentMethod = 1;

    while (input[index] !== 'End') {
        let payment = Number(input[index]);

        if (paymentMethod === 1) {
            if (payment > 100) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                totalCash += payment;
                cashCount++;
            }
            paymentMethod = 2;
        } else {
            if (payment < 10) {
                console.log('Error in transaction!');
            } else {
                console.log('Product sold!');
                totalCard += payment;
                cardCount++;
            }
            paymentMethod = 1;
        }

        totalCollected = totalCash + totalCard;

        if (totalCollected >= moneyNeeded) {
            console.log(`Average CS: ${(totalCash / cashCount).toFixed(2)}`);
            console.log(`Average CC: ${(totalCard / cardCount).toFixed(2)}`);
            return;
        }

        index++;
    }

    console.log('Failed to collect required money for charity.');
}

solve([
  '500', '120',
  '8',   '63',
  '256', '78',
  '317'
]);

 solve(['600','86','150','98','227','End']);
