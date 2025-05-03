function solve(commands) {
    let numbers = commands.splice(0, 1).join('').split(' ').map(Number);
    let index = 0;

    while (commands[index] !== 'end') {
        let [command, index1, index2] = commands[index].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'swap') {
            let temp = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = temp;
        } else if (command === 'multiply') {
            let result = numbers[index1] * numbers[index2];
            numbers.splice(index1, 1, result);
        } else if (command === 'decrease') {
            numbers = numbers.map(n => n - 1);
        }

        index++;
    }

    console.log(numbers.join(', '));
}


solve( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])