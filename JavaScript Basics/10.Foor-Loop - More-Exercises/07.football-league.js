function solve(input) {
    let stadiumSpace = Number(input[0]);
    let fansCount = Number(input[1]);

    let sectorAcount = 0;
    let sectorBcount = 0;
    let sectorVcount = 0;
    let sectorGcount = 0;

    for (let index = 2; index < 2 + fansCount; index++) {
        let sector = input[index];

        switch (sector) {
            case 'A': sectorAcount++; break;
            case 'B': sectorBcount++; break;
            case 'V': sectorVcount++; break;
            case 'G': sectorGcount++; break;
        }
    }

    console.log(`${(sectorAcount / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorBcount / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorVcount / fansCount * 100).toFixed(2)}%`);
    console.log(`${(sectorGcount / fansCount * 100).toFixed(2)}%`);
    console.log(`${(fansCount / stadiumSpace * 100).toFixed(2)}%`);
}
