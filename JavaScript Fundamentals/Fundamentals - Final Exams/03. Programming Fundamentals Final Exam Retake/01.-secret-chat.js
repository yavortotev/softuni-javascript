function solve(commands) {
    let str = commands.shift();

    for (const line of commands) {
        if (line === 'Reveal') break;

        let [command, arg1, arg2] = line.split(':|:');

        if (command === 'ChangeAll') {
            while (str.includes(arg1)) {
                str = str.replace(arg1, arg2);
            }
            console.log(str);

        } else if (command === 'Reverse') {
            if (str.includes(arg1)) {
                let reversed = arg1.split('').reverse().join('');
                str = str.replace(arg1, '') + reversed;
                console.log(str);
            } else {
                console.log('error');
            }

        } else if (command === 'InsertSpace') {
            let position = Number(arg1);
            str = str.slice(0, position) + ' ' + str.slice(position);
            console.log(str);
        }
    }

    console.log(`You have a new text message: ${str}`);
}


 solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)