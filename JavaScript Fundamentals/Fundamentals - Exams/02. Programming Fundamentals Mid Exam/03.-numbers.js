function solve(string) {
    let numbers = string.split(' ').map(Number);

    if (numbers.length === 1) {
        console.log('No');
        return;
    }

    let sum = numbers.reduce((a, b) => a + b, 0);
    let averageNum = sum / numbers.length;

    let aboveAverage = numbers
        .filter(n => n > averageNum)
        .sort((a, b) => b - a)
        .slice(0, 5);

    if (aboveAverage.length === 0) {
        console.log('No');
    } else {
        console.log(aboveAverage.join(' '));
    }
}


solve(["10","20","30","40","50"])