function solve(input) {

    let badGrade = Number(input[0]);

    let index = 1
    let badGradeCount = 0
    let gradeCount = 0
    let totalGrade = 0
    let isBadGadeEnought = 0

    while (input[index] !== 'Enough') {



        testNAme = input[index]
        grade = Number(input[index + 1])

        if (grade >= 4) {
            gradeCount++
            totalGrade += grade

        } else {

            badGradeCount++
            gradeCount++
            totalGrade+=grade
        }


        if (badGradeCount === badGrade) {
            isBadGadeEnought = 1
            
            break;

        }

        index += 2
    }

    if (isBadGadeEnought === 0) {
        console.log(`Average score: ${(totalGrade / gradeCount).toFixed(2) }`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${testNAme}`);
    }else{
        console.log(`You need a break, ${badGradeCount} poor grades.`);
    }



}
solve(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])