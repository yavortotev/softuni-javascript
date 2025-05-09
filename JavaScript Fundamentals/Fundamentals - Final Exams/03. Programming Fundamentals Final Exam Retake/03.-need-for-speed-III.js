function solve(arr) {
    let num = Number(arr.shift());
    let carsArr = arr.splice(0, num);
    let carsObj = {};

    for (let car of carsArr) {
        let [carName, mileage, fuel] = car.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        carsObj[carName] = { mileage, fuel };
    }

    let index = 0;

    while (arr[index] !== 'Stop') {
        let [command, carName, arg1, arg2] = arr[index].split(' : ');
        arg1 = Number(arg1);
        arg2 = arg2 !== undefined ? Number(arg2) : undefined;

        if (command === 'Drive') {
            if (carsObj[carName].fuel >= arg2) {
                carsObj[carName].mileage += arg1;
                carsObj[carName].fuel -= arg2;

                console.log(`${carName} driven for ${arg1} kilometers. ${arg2} liters of fuel consumed.`);

                if (carsObj[carName].mileage >= 100000) {
                    console.log(`Time to sell the ${carName}!`);
                    delete carsObj[carName];
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }

        } else if (command === 'Refuel') {
            let currentFuel = carsObj[carName].fuel;
            let fuelToAdd = arg1;

            if (currentFuel + fuelToAdd > 75) {
                fuelToAdd = 75 - currentFuel;
            }

            carsObj[carName].fuel += fuelToAdd;
            console.log(`${carName} refueled with ${fuelToAdd} liters`);

        } else if (command === 'Revert') {
            carsObj[carName].mileage -= arg1;

            if (carsObj[carName].mileage < 10000) {
                carsObj[carName].mileage = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${arg1} kilometers`);
            }
        }

        index++;
    }

    let entries = Object.entries(carsObj);

    for (let [carName, carStats] of entries) {
        console.log(`${carName} -> Mileage: ${carStats.mileage} kms, Fuel in the tank: ${carStats.fuel} lt.`);
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
