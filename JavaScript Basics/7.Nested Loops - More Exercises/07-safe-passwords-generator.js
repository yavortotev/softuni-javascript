function solve(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let max = Number(input[2]);
    let A = 35;
    let B = 64;
    let currentPassword = 0;
    let isFinished = false;
    let finalString = "";

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            if (currentPassword < max) {
                let password = "";

                password = String.fromCharCode(A) + String.fromCharCode(B) + i + j + String.fromCharCode(B) + String.fromCharCode(A);

                finalString += password + "|";
    
                currentPassword++;
    
                A = (A < 55) ? A + 1 : 35;
                B = (B < 96) ? B + 1 : 64;

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

solve(['2', '3', '10']);
