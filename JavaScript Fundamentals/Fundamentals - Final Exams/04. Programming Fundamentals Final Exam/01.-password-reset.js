function solve(commands) {
    let str = commands.shift();

    for (const line of commands) {
        if (line === 'Done') break;

        let [command, arg1, arg2] = line.split(' ');

        if (command === 'TakeOdd') {
            let result = '';
            for (let i = 1; i < str.length; i += 2) {
                result += str[i];
            }
            str = result;
            console.log(str);

        } else if (command === 'Cut') {
            let startIndex = Number(arg1);
            let length = Number(arg2);
            let substring = str.slice(startIndex, startIndex + length);
            str = str.replace(substring, '');
            console.log(str);

        } else if (command === 'Substitute') {
            if (str.includes(arg1)) {
                while (str.includes(arg1)) {
                    str = str.replace(arg1, arg2);
                }
                console.log(str);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }

    console.log(`Your password is: ${str}`);
}

solve(
    ["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
    