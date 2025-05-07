function solve(commands) {
    let pirateShip = commands.shift().split('>').map(Number);
    let warship = commands.shift().split('>').map(Number);
    let maxHealth = Number(commands.shift());

    for (const line of commands) {
        if (line === 'Retire') break;

        let [command, arg1, arg2, arg3] = line.split(' ');
        let index1 = Number(arg1);
        let index2 = Number(arg2);
        let value = Number(arg3);

        if (command === 'Fire') {
            if (index1 >= 0 && index1 < warship.length) {
                warship[index1] -= index2;
                if (warship[index1] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }

        } else if (command === 'Defend') {
            if (
                index1 >= 0 &&
                index2 < pirateShip.length &&
                index1 <= index2
            ) {
                for (let i = index1; i <= index2; i++) {
                    pirateShip[i] -= value;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }

        } else if (command === 'Repair') {
            if (index1 >= 0 && index1 < pirateShip.length) {
                pirateShip[index1] = Math.min(pirateShip[index1] + index2, maxHealth);
            }

        } else if (command === 'Status') {
            let count = pirateShip.filter(s => s < maxHealth * 0.2).length;
            console.log(`${count} sections need repair.`);
        }
    }

    const pirateStatus = pirateShip.reduce((a, b) => a + b, 0);
    const warshipStatus = warship.reduce((a, b) => a + b, 0);

    console.log(`Pirate ship status: ${pirateStatus}`);
    console.log(`Warship status: ${warshipStatus}`);
}

solve(['12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'])

