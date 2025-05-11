function solve(data) {
    let num = Number(data.shift());
    let heroesData = data.splice(0, num);
    let heroesObj = {};

    for (let entry of heroesData) {
        let [name, hp, mp] = entry.split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroesObj[name] = { hp, mp };
    }

    let index = 0;

    while (data[index] !== 'End') {
        let [command, heroName, value1, value2] = data[index].split(' - ');

        if (command === 'CastSpell') {
            let mpNeeded = Number(value1);
            let spellName = value2;
            if (heroesObj[heroName].mp >= mpNeeded) {
                heroesObj[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === 'TakeDamage') {
            let damage = Number(value1);
            let attacker = value2;
            if (heroesObj[heroName].hp - damage > 0) {
                heroesObj[heroName].hp -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[heroName].hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroesObj[heroName];
            }

        } else if (command === 'Recharge') {
            let amount = Number(value1);
            let currentMP = heroesObj[heroName].mp;
            let rechargeAmount = Math.min(200 - currentMP, amount);
            heroesObj[heroName].mp += rechargeAmount;
            console.log(`${heroName} recharged for ${rechargeAmount} MP!`);

        } else if (command === 'Heal') {
            let amount = Number(value1);
            let currentHP = heroesObj[heroName].hp;
            let healAmount = Math.min(100 - currentHP, amount);
            heroesObj[heroName].hp += healAmount;
            console.log(`${heroName} healed for ${healAmount} HP!`);
        }

        index++;
    }

    let entries = Object.entries(heroesObj);

    for (let [name, stats] of entries) {
        console.log(name);
        console.log(`HP: ${stats.hp}`);
        console.log(`MP: ${stats.mp}`);
    }
}

solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
