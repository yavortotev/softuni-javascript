function solve(input) {
    let bottles = Number(input[0]);
    let totalML = bottles * 750;

    let usedML = 0;
    let dishesWashed = 0;
    let potsWashed = 0;
    let cycle = 0;
    let index = 1;

    while (input[index] !== 'End') {
        let items = Number(input[index]);
        cycle++;

        let needed = 0;

        if (cycle % 3 === 0) {
            needed = items * 15;
            potsWashed += items;
        } else {
            needed = items * 5;
            dishesWashed += items;
        }

        usedML += needed;

        if (usedML > totalML) {
            console.log(`Not enough detergent, ${usedML - totalML} ml. more necessary!`);
            return;
        }

        index++;
    }

    let leftover = totalML - usedML;
    console.log("Detergent was enough!");
    console.log(`${dishesWashed} dishes and ${potsWashed} pots were washed.`);
    console.log(`Leftover detergent ${leftover} ml.`);
}

solve(['2', '53', '65', '55', 'End']);
