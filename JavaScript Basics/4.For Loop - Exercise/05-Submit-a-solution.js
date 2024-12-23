function submitSolution(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (i = 2; i < input.length; i++) {
        website = input[i];

        if (website === 'Facebook') {
            salary -= 150;
        } else if (website === 'Instagram') {
            salary -= 100;
        } else if (website === 'Reddit') {
            salary -= 50;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`)
    } else {
        console.log(salary);
    }
}

submitSolution(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])