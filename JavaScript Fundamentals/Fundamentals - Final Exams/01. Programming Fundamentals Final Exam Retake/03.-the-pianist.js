function solve(data) {

    let num = Number(data.shift());
    let piecesData = data.splice(0, num);
    let piecesObj = {};

    for (let pieceData of piecesData) {
        let [piece, composer, key] = pieceData.split('|');
        piecesObj[piece] = { composer, key };
    }

    for (let line of data) {
        if (line === 'Stop') {
            break;
        }

        let commands = line.split('|');
        let command = commands[0];
        let arg1 = commands[1];
        let arg2 = commands[2];
        let arg3 = commands[3];

        if (command === 'Add') {
            if (!piecesObj.hasOwnProperty(arg1)) {
                piecesObj[arg1] = { composer: arg2, key: arg3 };
                console.log(`${arg1} by ${arg2} in ${arg3} added to the collection!`);
            } else {
                console.log(`${arg1} is already in the collection!`);
            }

        } else if (command === 'Remove') {
            if (!piecesObj.hasOwnProperty(arg1)) {
                console.log(`Invalid operation! ${arg1} does not exist in the collection.`);
            } else {
                delete piecesObj[arg1];
                console.log(`Successfully removed ${arg1}!`);
            }

        } else if (command === 'ChangeKey') {
            if (!piecesObj.hasOwnProperty(arg1)) {
                console.log(`Invalid operation! ${arg1} does not exist in the collection.`);
            } else {
                piecesObj[arg1].key = arg2;
                console.log(`Changed the key of ${arg1} to ${arg2}!`);
            }
        }
    }

    let entries = Object.entries(piecesObj);

    for (let [piece, obj] of entries) {
        console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
