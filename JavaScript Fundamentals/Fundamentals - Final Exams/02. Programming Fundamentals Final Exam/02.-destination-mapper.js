function solve(input) {
    const destinations = [];
    let travelPoints = 0;

    const pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;
    let match;

    while ((match = pattern.exec(input)) !== null) {
        destinations.push(match[2]);
        travelPoints += match[2].length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")