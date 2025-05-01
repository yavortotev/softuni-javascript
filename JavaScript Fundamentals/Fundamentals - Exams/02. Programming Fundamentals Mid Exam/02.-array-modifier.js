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
