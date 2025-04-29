function solve(input) {
    let people = Number(input[0]);
    let lifts = input[1].toString().split(' ').map(Number);

    for (let i = 0; i < lifts.length; i++) {
        let availableSpots = 4 - lifts[i];

        if (availableSpots > 0) {
            if (people >= availableSpots) {
                lifts[i] += availableSpots;
                people -= availableSpots;
            } else {
                lifts[i] += people;
                people = 0;
                break;
            }
        }
    }

    let isFull = lifts.every(wagon => wagon === 4);

    if (people === 0 && isFull) {
        console.log(lifts.join(' '));
    } else if (people === 0 && !isFull) {
        console.log('The lift has empty spots!');
        console.log(lifts.join(' '));
    } else if (people > 0 && isFull) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lifts.join(' '));
    }
}

solve(['15',
    '0 0 0 0'])