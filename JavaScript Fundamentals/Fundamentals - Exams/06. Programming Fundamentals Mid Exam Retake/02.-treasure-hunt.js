function solve(commands) {
    let loot = commands.shift().split('|');
    let stolenItems = [];

    for (const commandLine of commands) {
        if (commandLine === 'Yohoho!') break;

        const [action, ...args] = commandLine.split(' ');

        if (action === 'Loot') {
            for (const item of args) {
                if (!loot.includes(item)) {
                    loot.unshift(item);
                }
            }

        } else if (action === 'Drop') {
            const index = Number(args[0]);
            if (index >= 0 && index < loot.length) {
                const [item] = loot.splice(index, 1);
                loot.push(item);
            }

        } else if (action === 'Steal') {
            const count = Number(args[0]);
            stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }
    }

    if (loot.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        const totalLength = loot.reduce((sum, item) => sum + item.length, 0);
        const averageGain = totalLength / loot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

solve(['Diamonds|Silver|Shotgun|Gold',
'Loot Silver Medals Coal',
'Drop -1',
'Drop 1',
'Steal 6',
'Yohoho!'])