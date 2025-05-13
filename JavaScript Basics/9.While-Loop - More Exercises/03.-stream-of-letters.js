function solve(input) {
    let index = 0;
    let word = "";
    let isC = false;
    let isO = false;
    let isN = false;
    let isC2 = false;
    let isO2 = false;
    let isN2 = false;
    let counter = 0;
    let finalString = "";

    while (input[index] !== 'End') {
        let letter = input[index];

        if ((letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) || (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {

            if (letter === 'c') {
                if (!isC2) {
                    counter++;
                    isC2 = true;
                }

                if (!isC) {
                    isC = true;
                } else {
                    word += letter;
                }

            } else if (letter === 'o') {
                if (!isO2) {
                    counter++;
                    isO2 = true;
                }

                if (!isO) {
                    isO = true;
                } else {
                    word += letter;
                }

            } else if (letter === 'n') {
                if (!isN2) {
                    counter++;
                    isN2 = true;
                }

                if (!isN) {
                    isN = true;
                } else {
                    word += letter;
                }

            } else {
                word += letter;
            }

            if (counter === 3) {
                finalString += word + " ";
                word = "";
                counter = 0;
                isC = isO = isN = false;
                isC2 = isO2 = isN2 = false;
            }
        }

        index++;
    }

    console.log(finalString);
}

solve([
    'o',
    'S',
    '%',
    'o',
    'l',
    '^',
    'v',
    'e',
    'c',
    'n',
    '&',
    'm',
    'e',
    'c',
    'o',
    'n',
    'End'
]);
