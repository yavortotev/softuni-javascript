function solve(data) {
    let citiesObj = {};

    // Initial loading phase
    while (data[0] !== 'Sail') {
        let [city, people, gold] = data.shift().split('||');
        people = Number(people);
        gold = Number(gold);

        if (!citiesObj.hasOwnProperty(city)) {
            citiesObj[city] = { people, gold };
        } else {
            citiesObj[city].people += people;
            citiesObj[city].gold += gold;
        }
    }

    data.shift(); // Remove 'Sail'

    // Commands phase
    while (data[0] !== 'End') {
        let [command, city, arg1, arg2] = data.shift().split('=>');
        let value1 = Number(arg1);
        let value2 = Number(arg2);

        if (command === 'Plunder') {
            citiesObj[city].people -= value1;
            citiesObj[city].gold -= value2;
            console.log(`${city} plundered! ${value2} gold stolen, ${value1} citizens killed.`);

            if (citiesObj[city].people <= 0 || citiesObj[city].gold <= 0) {
                delete citiesObj[city];
                console.log(`${city} has been wiped off the map!`);
            }

        } else if (command === 'Prosper') {
            if (value1 < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                citiesObj[city].gold += value1;
                console.log(`${value1} gold added to the city treasury. ${city} now has ${citiesObj[city].gold} gold.`);
            }
        }
    }

    // Final Output
    let cityEntries = Object.entries(citiesObj);

    if (cityEntries.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);
        for (let [city, stats] of cityEntries) {
            console.log(`${city} -> Population: ${stats.people} citizens, Gold: ${stats.gold} kg`);
        }
    }
}

solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])