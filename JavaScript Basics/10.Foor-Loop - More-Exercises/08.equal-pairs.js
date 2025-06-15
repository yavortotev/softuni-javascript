function equalPairs(input) {
    let n = Number(input[0]);

    let previousSum = 0;
    let maxDiff = 0;
    let hasDifferent = false;

    for (let i = 1; i < input.length; i += 2) {
        let number1 = Number(input[i]);
        let number2 = Number(input[i + 1]);
        let currentSum = number1 + number2;

        if (i === 1) {
            previousSum = currentSum;
        } else {
            if (currentSum !== previousSum) {
                hasDifferent = true;
                let diff = Math.abs(currentSum - previousSum);
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
            previousSum = currentSum;
        }
    }

    if (!hasDifferent) {
        console.log(`Yes, value=${previousSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs([ '2', '-1', '2', '0', '-1' ])