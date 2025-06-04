function solve(input) {
    let sum = 0;
    let endNum = Number(input[0]);

    for (let i = 1; i <= endNum; i++) {
        let number = Number(input[i]);
        sum += number;
    }

    let average = sum / endNum;
    console.log(average.toFixed(2));
}
