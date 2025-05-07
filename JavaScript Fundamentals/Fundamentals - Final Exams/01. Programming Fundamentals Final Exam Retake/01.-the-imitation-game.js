function solve(arr) {

    let message = arr.shift();
    let command = arr.shift();

    let newStr = '';
    let newStr2 = '';

    while (command !== 'Decode') {
        let tokens = command.split('|');
        let action = tokens[0];

        if (action === 'ChangeAll') {
            let substr = tokens[1];
            let replacement = tokens[2];

            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }

        } else if (action === 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];

            newStr = message.substring(0, index);
            newStr2 = message.substring(index);
            message = newStr + value + newStr2;

        } else if (action === 'Move') {
            let numLetters = Number(tokens[1]);

            let startLetters = message.substring(0, numLetters);
            message = message.replace(startLetters, '');
            message = message + startLetters;
        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
