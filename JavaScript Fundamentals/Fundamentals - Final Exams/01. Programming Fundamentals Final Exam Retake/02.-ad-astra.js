function adAstra([arr]) {

    let pattern = /(\||#)(?<itemName>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/gm;
    let totalCal = 0;
    let matches = arr.matchAll(pattern);

    for (let match of matches) {
        totalCal += Number(match.groups.cal);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);

    let matches1 = arr.matchAll(pattern);
    for (let match of matches1) {
        console.log(`Item: ${match.groups.itemName}, Best before: ${match.groups.date}, Nutrition: ${match.groups.cal}`);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])