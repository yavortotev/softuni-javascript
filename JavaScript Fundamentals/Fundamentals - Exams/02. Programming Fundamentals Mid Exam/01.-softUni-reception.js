function solve(arr) {
    let [emp1, emp2, emp3, students] = arr.map(Number);

    let studentsPerHour = emp1 + emp2 + emp3;
    let totalStudentsLeft = students;
    let hours = 0;

    while (totalStudentsLeft > 0) {
        hours++;

        if (hours % 4 !== 0) {
            totalStudentsLeft -= studentsPerHour;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}


solve(["5",
    "6",
    "4",
    "20"])