function histogram(input) {


    let n = Number(input[0]);

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;

    for (let i = 1; i <= n; i++) {

        let number = input[i]

        if (number < 200) {
            c1++;
        } else if (number < 400) {
            c2++;
        } else if (number < 600) {
            c3++;
        } else if (number < 800) {
            c4++;
        } else {
            c5++;
        }
    }

    let p1 = (c1 / n * 100).toFixed(2)
    let p2 = (c2 / n * 100).toFixed(2)
    let p3 = (c3 / n * 100).toFixed(2)
    let p4 = (c4 / n * 100).toFixed(2)
    let p5 = (c5 / n * 100).toFixed(2)


    console.log(`${(p1)}%`)
    console.log(`${(p2)}%`)
    console.log(`${(p3)}%`)
    console.log(`${(p4)}%`)
    console.log(`${(p5)}%`)
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"])