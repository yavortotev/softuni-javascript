function solve(input) {
    let studentsCount = Number(input[0]);
    let lectureCount = Number(input[1]);
    let additionalBonus = Number(input[2]);
    let attendance = input.splice(3, studentsCount).join(' ').split(' ').map(Number);

    let totalBonus = 0;
    let biggestBonus = Number.MIN_VALUE;
    let studentWithLectures = 0;

    for (let i = 0; i < studentsCount; i++) {
        let studentAttendance = Number(attendance[i]);

        totalBonus = (studentAttendance / lectureCount) * (5 + additionalBonus);

        if (totalBonus > biggestBonus) {
            biggestBonus = totalBonus;
            studentWithLectures = studentAttendance;
        }
    }

    console.log(`Max Bonus: ${Math.round(biggestBonus)}.`);
    console.log(`The student has attended ${studentWithLectures} lectures.`);
}

solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
