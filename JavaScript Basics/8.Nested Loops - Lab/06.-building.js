function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor > 0; floor--) {
        let buff = '';

        for (let room = 0; room < y; room++) {
            if (floor === x) {
                buff += `L${floor}${room}` + " ";
            } else if (floor % 2 === 0) {
                buff += `O${floor}${room}` + " ";
            } else {
                buff += `A${floor}${room}` + " ";
            }
        }
        console.log(buff);
    }
}

solve(["6", "4"]);
