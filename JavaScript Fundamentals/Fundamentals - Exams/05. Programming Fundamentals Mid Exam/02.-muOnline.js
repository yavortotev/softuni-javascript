function solve(arr) {

    let initialHealth = 100;
    let bitcoins = 0;
    let room = 0;
    let isAlive = true;

    arr = arr.split('|');

    for (let i = 0; i < arr.length; i++) {
        room++;

        let [command, number] = arr[i].split(' ');
        number = Number(number);

        if (command === 'potion') {
            if (initialHealth + number > 100) {
                console.log(`You healed for ${100 - initialHealth} hp.`);
            } else {
                console.log(`You healed for ${number} hp.`);
            }

            if (initialHealth <= 100) {
                initialHealth += number;
                if (initialHealth > 100) {
                    initialHealth = 100;
                }
                console.log(`Current health: ${initialHealth} hp.`);
            } else {
                console.log(`Current health: ${initialHealth} hp.`);
            }

        } else if (command === 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);

        } else {
            initialHealth -= number;
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                isAlive = false;
                break;
            }
        }
    }

    if (isAlive === true) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
