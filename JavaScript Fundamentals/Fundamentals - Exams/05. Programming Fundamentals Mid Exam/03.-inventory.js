function solve(commands) {

    let arr = [];

    arr = commands.shift().split(', ');

    let index = 0;

    while (commands[index] !== 'Craft!') {

        let [command, item] = commands[index].split(' - ');

        if (command === 'Collect') {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        } else if (command === 'Drop') {
            if (arr.includes(item)) {
                arr.splice(arr.indexOf(item), 1);
            }
        } else if (command === 'Combine Items') {
            item = item.split(':');
            if (arr.includes(item[0])) {
                arr.splice(arr.indexOf(item[0]) + 1, 0, item[1]);
            }
        } else if (command === 'Renew') {
            if (arr.includes(item)) {
                arr.splice(arr.indexOf(item), 1);
                arr.push(item);
            }
        }

        index++;
    }

    console.log(arr.join(', '));
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
