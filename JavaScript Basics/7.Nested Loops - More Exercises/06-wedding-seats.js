function solve(input) {

    let finalSector = input[0];
    let rowCount = Number(input[1]);
    let seatCount = Number(input[2]);
    let currentSeatCount = 0;
    let rowOffset = 0;
    let totalSeats = 0;

    for (let i = 'A'.charCodeAt(0); i <= finalSector.charCodeAt(0); i++) {
        for (let j = 1; j <= rowCount + rowOffset; j++) {
            if (j % 2 !== 0) {
                currentSeatCount = 'a'.charCodeAt(0) + seatCount;
            } else {
                currentSeatCount = 'a'.charCodeAt(0) + seatCount + 2;
            }

            for (let k = 'a'.charCodeAt(0); k < currentSeatCount; k++) {
                console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
                totalSeats++;
            }
        }

        rowOffset++;
    }

    console.log(totalSeats);
}

solve(['B', '3', '2']);
