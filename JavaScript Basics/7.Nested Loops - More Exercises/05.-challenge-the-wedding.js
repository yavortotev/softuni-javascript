function solve(input) {

    let man = Number(input[0]);
    let woman = Number(input[1]);
    let tables = Number(input[2]);
    let currentTables = 0;
    let finalString = "";
    let isFinished = false;

    for (let i = 1; i <= man; i++) {
        for (let j = 1; j <= woman; j++) {
            if (currentTables < tables) {
                currentTables++;
                finalString += `(${i} <-> ${j}) `; 
            } else {
                isFinished = true;
                break;
            }
        }

        if (isFinished === true) {
            break;
        }
    }

    console.log(finalString);
}

solve(['2', '2', '3']);
