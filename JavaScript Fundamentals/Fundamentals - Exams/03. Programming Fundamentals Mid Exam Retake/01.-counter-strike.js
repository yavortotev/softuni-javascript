function solve(fights) {
    let energy = Number(fights.shift());
    let wins = 0;
    let fightCounter = 0;
    let outOfEnergy = false;

    for (let i = 0; i < fights.length; i++) {
        if (fights[i] === 'End of battle') break;

        let cost = Number(fights[i]);
        fightCounter++;
        energy -= cost;

        if (energy >= 0) {
            wins++;
            if (fightCounter % 3 === 0) {
                energy += wins;
            }
        } else {
            outOfEnergy = true;
            break;
        }
    }

    if (outOfEnergy) {
        console.log(`Not enough energy! Game ends with ${wins} won battles and ${Math.max(0, energy)} energy`);
    } else {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}
