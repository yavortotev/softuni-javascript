function solve(arr) {

    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let targetPlunder = Number(arr[2]);
    let plunder = 0;
    let dayCounter = 0;
    let percentLeft = 0;

    for (let i = 1; i <= days; i++) {
        dayCounter++;
        plunder += dailyPlunder;

        if (dayCounter % 3 === 0) {
            plunder += (dailyPlunder * 0.5);
        }

        if (dayCounter % 5 === 0) {
            plunder = plunder * 0.7;
        }
    }

    if (plunder >= targetPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        percentLeft = (plunder / targetPlunder) * 100;
        console.log(`Collected only ${percentLeft.toFixed(2)}% of the plunder.`);
    }
}


solve(['5','40','100'])