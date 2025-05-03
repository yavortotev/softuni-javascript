function solve(jumps) {

    let addresses = jumps.splice(0, 1).join('').split('@').map(Number);
    let total = 0;
    let counter = 0;

    let index = 0;
    while (jumps[index] !== 'Love!') {

        let [_, jumpLength] = jumps[index].split(' ');
        jumpLength = Number(jumpLength);

        total += jumpLength;

        if (total > addresses.length - 1) {
            total = 0;
        }

        if (addresses[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            addresses[total] -= 2;

            if (addresses[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);
            }
        }

        index++;
    }

    console.log(`Cupid's last position was ${total}.`);

    if (addresses.every(n => n === 0)) {
        console.log('Mission was successful.');
    } else {
        let failedPlaces = addresses.filter(n => n !== 0).length;
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }
}

solve([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);
