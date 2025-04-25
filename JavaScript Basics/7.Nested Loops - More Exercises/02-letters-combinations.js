function solve(input) {

    let start = input[0];
    let end = input[1];
    let skip = input[2];

    let finalString = "";
    let combinationCount = 0;

    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        for (let y = start.charCodeAt(0); y <= end.charCodeAt(0); y++) {
            for (let x = start.charCodeAt(0); x <= end.charCodeAt(0); x++) {

                if (
                    (String.fromCharCode(i) !== skip) &&
                    (String.fromCharCode(y) !== skip) &&
                    (String.fromCharCode(x) !== skip)
                ) {
                    finalString += String.fromCharCode(i);
                    finalString += String.fromCharCode(y);
                    finalString += String.fromCharCode(x);
                    finalString += ' ';
                    combinationCount++;
                }
            }
        }
    }

    console.log(`${finalString}${combinationCount}`);
}

solve(['a', 'c', 'b']);
