function solve(numbers) {
    let targets = numbers.shift().split(' ').map(Number);
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 'End') break;

        let index = Number(numbers[i]);

        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            let targetNum = targets[index];
            targets[index] = -1;
            count++;

            targets = targets.map(n => {
                if (n === -1) return n;
                return n > targetNum ? n - targetNum : n + targetNum;
            });
        }
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}



solve(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
