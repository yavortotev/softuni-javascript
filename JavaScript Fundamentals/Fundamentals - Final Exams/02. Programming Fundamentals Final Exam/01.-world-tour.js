function solve(commands) {

    let str = commands.shift();
    let index = 0;

    while (index < commands.length && commands[index] !== 'Travel') {
        let commandParts = commands[index].split(':');

        let command = commandParts[0];
        let index1 = commandParts[1];
        let index2 = commandParts[2];

        if (command === 'Add Stop') {
            index1 = Number(index1);
            if (index1 >= 0 && index1 < str.length) {
                let firstPart = str.substring(0, index1);
                let secondPart = str.substring(index1);
                str = firstPart + index2 + secondPart;
            }
            console.log(str);

        } else if (command === 'Remove Stop') {
            index1 = Number(index1);
            index2 = Number(index2);
            if ((index1 >= 0 && index1 < str.length) && (index2 >= 0 && index2 < str.length)) {
                let firstPart = str.substring(0, index1);
                let secondPart = str.substring(index2 + 1);
                str = firstPart + secondPart;
            }
            console.log(str);

        } else if (command === 'Switch') {
            if (str.includes(index1)) {
                str = str.replace(index1, index2);
            }
            console.log(str);
        }

        index++;
    }

    console.log(`Ready for world tour! Planned stops: ${str}`);
}

solve([
    "Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania:Azərbaycan",
    "Travel"
]);
