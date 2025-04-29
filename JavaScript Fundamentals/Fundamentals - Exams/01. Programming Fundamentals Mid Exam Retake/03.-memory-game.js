function solve(commands) {
    let numbers = commands.splice(0, 1).join('').split(' ');
    let numberOfMoves = 0;
    let isEnd = false;
    let index = 0;

    while (commands[index] !== 'end') {
        numberOfMoves++;

        let [index1, index2] = commands[index].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        if (
            index1 >= 0 && index1 < numbers.length &&
            index2 >= 0 && index2 < numbers.length &&
            index1 !== index2
        ) {
            if (numbers[index1] === numbers[index2]) {
                let matchingNumber = numbers[index1];
                if (index1 > index2) {
                    numbers.splice(index1, 1);
                    numbers.splice(index2, 1);
                } else {
                    numbers.splice(index2, 1);
                    numbers.splice(index1, 1);
                }
                console.log(`Congrats! You have found matching elements - ${matchingNumber}!`);
            } else {
                console.log('Try again!');
            }
        } else {
            let middleIndex = numbers.length / 2;
            let newElement = `-${numberOfMoves}a`;
            numbers.splice(middleIndex, 0, newElement);
            numbers.splice(middleIndex + 1, 0, newElement);
            console.log("Invalid input! Adding additional elements to the board");
        }

        if (numbers.length === 0) {
            isEnd = true;
            break;
        }

        index++;
    }

    if (isEnd) {
        console.log(`You have won in ${numberOfMoves} turns!`);
    } else {
        console.log("Sorry you lose :(");
        console.log(numbers.join(' '));
    }
}

solve([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
]);
