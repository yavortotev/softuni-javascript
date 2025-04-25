function solve(input) {

    let judgeCount = Number(input[0]);

    let index = 1;
    let totalScore = 0;
    let totalTotalScore = 0;
    let totalExams = 0;

    while (input[index] !== 'Finish') {

        let examSubject = input[index];
        index++;

        for (let i = 0; i < judgeCount; i++) {
            let examScore = Number(input[index]);
            index++;
            totalScore += examScore;
            totalExams++;
        }

        console.log(`${examSubject} - ${(totalScore / judgeCount).toFixed(2)}.`);

        totalTotalScore += totalScore;
        totalScore = 0;
    }

    console.log(`Student's final assessment is ${(totalTotalScore / totalExams).toFixed(2)}.`);

}


solve(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])