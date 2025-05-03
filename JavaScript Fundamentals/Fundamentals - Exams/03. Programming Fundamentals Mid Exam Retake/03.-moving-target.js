function solve(commands) {
    let targets = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'End') break;

        let [command, indexStr, valueStr] = commands[i].split(' ');
        let index = Number(indexStr);
        let value = Number(valueStr);

        if (command === 'Shoot') {
            if (index >= 0 && index < targets.length) {
                targets[index] -= value;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (command === 'Add') {
            if (index >= 0 && index <= targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            let start = index - value;
            let end = index + value;
            if (start >= 0 && end < targets.length) {
                targets.splice(start, value * 2 + 1);
            } else {
                console.log('Strike missed!');
            }
        }
    }

    console.log(targets.join('|'));
}

solve(["52 74 23 44 96 110",

    "Shoot 5 10",
    
    "Shoot 1 80",
    
    "Strike 2 1",
    
    "Add 22 3",
    
    "End"])