function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let totalExamTime = examHour * 60 + examMin;
    let totalArriveTime = arriveHour * 60 + arriveMin;

    let totalDiffTime = Math.abs(totalExamTime - totalArriveTime);

    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;

    if (totalExamTime === totalArriveTime) {
        console.log('On time');
    } else if (totalExamTime < totalArriveTime) {
        console.log('Late');

        if (totalDiffTime < 60) {
            console.log(`${diffMin} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            console.log('On time');
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log('Early');

            if (totalDiffTime < 60) {
                console.log(`${diffMin} minutes before the start`);
            } else {
                if (diffMin < 10) {
                    console.log(`${diffHour}:0${diffMin} hours before the start`);
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }
            }
        }
    }
}

onTimeForTheExam(["11", "30", "12", "29"]);
