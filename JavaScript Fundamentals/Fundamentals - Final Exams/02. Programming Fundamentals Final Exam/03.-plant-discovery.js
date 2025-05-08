function solve(arr) {
    const numberOfPlants = Number(arr.shift());
    const plantData = arr.slice(0, numberOfPlants);
    const commands = arr.slice(numberOfPlants);
    const plants = {};

    for (const line of plantData) {
        const [plantName, rarity] = line.split('<->');
        plants[plantName] = {
            rarity: Number(rarity),
            totalRating: 0,
            ratingCount: 0
        };
    }

    for (const commandLine of commands) {
        if (commandLine === 'Exhibition') break;

        const [command, args] = commandLine.split(': ');
        const [plantName, value] = args.split(' - ');

        if (!plants.hasOwnProperty(plantName)) {
            console.log('error');
            continue;
        }

        if (command === 'Rate') {
            const rating = Number(value);
            plants[plantName].totalRating += rating;
            plants[plantName].ratingCount++;

        } else if (command === 'Update') {
            plants[plantName].rarity = Number(value);

        } else if (command === 'Reset') {
            plants[plantName].totalRating = 0;
            plants[plantName].ratingCount = 0;

        } else {
            console.log('error');
        }
    }

    console.log('Plants for the exhibition:');
    for (const [name, { rarity, totalRating, ratingCount }] of Object.entries(plants)) {
        const avgRating = ratingCount === 0 ? 0 : totalRating / ratingCount;
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}

 solve(["2",
    "Candelabra<->10" ,
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])