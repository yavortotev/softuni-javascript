function solve(input) {

    let n = Number(input[0]);
    let l = Number(input[1]);
    let finalString = "";

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            for (let k = 'a'.charCodeAt(0); k < 'a'.charCodeAt(0) + l; k++) {
                for (let x = 'a'.charCodeAt(0); x < 'a'.charCodeAt(0) + l; x++) {
                    for (let z = 1; z <= n; z++) {
                        if (z > i && z > j) {
                            finalString += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(x)}${z} `;
                        }
                    }
                }
            }
        }
    }

    console.log(finalString);
}

solve(['2', '4']);
