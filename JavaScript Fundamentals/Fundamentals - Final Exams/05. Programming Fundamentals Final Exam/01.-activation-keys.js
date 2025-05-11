function solve(data) {

    let str = data.shift();

    for (let line of data) {
        if (line === 'Generate') {
            break;
        }

        let commands = line.split('>>>');
        let command = commands[0];
        let arg1 = commands[1];
        let arg2 = commands[2];
        let arg3 = commands[3];

        if (command === 'Contains') {
            if (str.includes(arg1)) {
                console.log(`${str} contains ${arg1}`);
            } else {
                console.log("Substring not found!");
            }

        } else if (command === 'Flip' && arg1 === 'Upper') {
            let start = Number(arg2);
            let end = Number(arg3);
            let segment = str.substring(start, end);
            let upperSegment = segment.toUpperCase();
            str = str.substring(0, start) + upperSegment + str.substring(end);
            console.log(str);

        } else if (command === 'Flip' && arg1 === 'Lower') {
            let start = Number(arg2);
            let end = Number(arg3);
            let segment = str.substring(start, end);
            let lowerSegment = segment.toLowerCase();
            str = str.substring(0, start) + lowerSegment + str.substring(end);
            console.log(str);

        } else if (command === 'Slice') {
            let start = Number(arg1);
            let end = Number(arg2);
            str = str.substring(0, start) + str.substring(end);
            console.log(str);
        }
    }

    console.log(`Your activation key is: ${str}`);
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
