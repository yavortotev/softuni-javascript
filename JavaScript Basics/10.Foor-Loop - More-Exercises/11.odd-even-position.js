function solve(input) {
    const count = Number(input[0]);

    let oddSum = 0, oddMin = Number.POSITIVE_INFINITY, oddMax = Number.NEGATIVE_INFINITY, oddCount = 0;
    let evenSum = 0, evenMin = Number.POSITIVE_INFINITY, evenMax = Number.NEGATIVE_INFINITY, evenCount = 0;

    for (let i = 1; i <= count; i++) {
        let number = Number(input[i]);

        if (i % 2 === 0) {
            evenSum += number;
            evenMin = Math.min(evenMin, number);
            evenMax = Math.max(evenMax, number);
            evenCount++;
        } else {
            oddSum += number;
            oddMin = Math.min(oddMin, number);
            oddMax = Math.max(oddMax, number);
            oddCount++;
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(oddCount > 0 ? `OddMin=${oddMin.toFixed(2)},` : `OddMin=No,`);
    console.log(oddCount > 0 ? `OddMax=${oddMax.toFixed(2)},` : `OddMax=No,`);

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(evenCount > 0 ? `EvenMin=${evenMin.toFixed(2)},` : `EvenMin=No,`);
    console.log(evenCount > 0 ? `EvenMax=${evenMax.toFixed(2)}` : `EvenMax=No`);
}
