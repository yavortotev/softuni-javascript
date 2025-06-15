function solve(input) {
    for (let hours = 0; hours <= 23; hours++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            let h = hours.toString().padStart(2, '0');
            let m = minutes.toString().padStart(2, '0');
            console.log(`${h}:${m}`);
        }
    }
}
