function solve(data) {

    let num = Number(data.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    let digitPattern = /[0-9]/g;

    for (let line of data) {

        if (pattern.test(line)) {
            let matches = line.match(digitPattern);

            if (matches) {
                let productGroup = matches.join('');
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log('Product group: 00');
            }

        } else {
            console.log("Invalid barcode");
        }
    }
}

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
    
    