function solve(input) {

    let studentsCount = Number(input[0]);

    let score4To5 = 0;
    let score3To4 = 0;
    let scoreOver5 = 0;
    let scoreLessThan3 = 0;

    let totalGrade = 0;

    for (let index = 1; index <= studentsCount; index++) {
        let score = Number(input[index]);

        if (score < 3) {
            scoreLessThan3++;
            totalGrade += score;
        } else if (score >= 3 && score < 4) {
            score3To4++;
            totalGrade += score;
        } else if (score >= 4 && score < 5) {
            score4To5++;
            totalGrade += score;
        } else if (score >= 5) {
            scoreOver5++;
            totalGrade += score;
        }
    }

    console.log(`Top students: ${((scoreOver5 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((score4To5 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((score3To4 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((scoreLessThan3 / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalGrade / studentsCount).toFixed(2)}`);
}
