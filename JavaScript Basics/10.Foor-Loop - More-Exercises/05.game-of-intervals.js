function solve(input) {
    let endGameNumber = Number(input[0]);

    let points = 0;
    let numbers0to9 = 0;
    let numbers10to19 = 0;
    let numbers20to29 = 0;
    let numbers30to39 = 0;
    let numbers40to50 = 0;
    let invalideNumbers = 0;

    for (let index = 1; index <= endGameNumber; index++) {
        let number = Number(input[index]);

        if (number >= 0 && number <= 9) {
            points += 0.2 * number;
            numbers0to9++;
        } else if (number >= 10 && number <= 19) {
            points += 0.3 * number;
            numbers10to19++;
        } else if (number >= 20 && number <= 29) {
            points += 0.4 * number;
            numbers20to29++;
        } else if (number >= 30 && number <= 39) {
            points += 50;
            numbers30to39++;
        } else if (number >= 40 && number <= 50) {
            points += 100;
            numbers40to50++;
        } else {
            points /= 2;
            invalideNumbers++;
        }
    }

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(numbers0to9 / endGameNumber * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(numbers10to19 / endGameNumber * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(numbers20to29 / endGameNumber * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(numbers30to39 / endGameNumber * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(numbers40to50 / endGameNumber * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalideNumbers / endGameNumber * 100).toFixed(2)}%`);
}

solve(['10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20'])