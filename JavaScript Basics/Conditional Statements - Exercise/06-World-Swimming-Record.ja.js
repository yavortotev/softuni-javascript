function worldSwimmingRecord(input) {

    let worldRecord = Number(input[0]);
    let theDistance = Number(input[1]);
    let timeSwim1Meter = Number(input[2]);

    let ivanTime = theDistance * timeSwim1Meter;
    let waterSlowDown = Math.floor((theDistance / 15)) * 12.5;

    let totalIvanTime = ivanTime + waterSlowDown;

    if (totalIvanTime > worldRecord) {
        let secondsNeeded = totalIvanTime - worldRecord;

        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalIvanTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(['55555.67', '3017', '5.03']);
