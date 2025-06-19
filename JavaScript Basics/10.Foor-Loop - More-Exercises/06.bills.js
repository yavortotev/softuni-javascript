function solve(input) {

    let monthsCount = Number(input[0]);

    let waterBill = 0;
    let internet = 0;
    let electricityBill = 0;
    let otherExpenses = 0;

    for (let index = 1; index <= monthsCount; index++) {

        let electricity = Number(input[index]);

        electricityBill += electricity;
        waterBill += 20;
        internet += 15;

        let currentMonthTotal = electricity + 20 + 15;
        otherExpenses += currentMonthTotal + (currentMonthTotal * 0.20);
    }

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${otherExpenses.toFixed(2)} lv`);

    let average = (electricityBill + waterBill + internet + otherExpenses) / monthsCount;
    console.log(`Average: ${average.toFixed(2)} lv`);
}
