function solve(input) {

    let food = input[0] * 1000;
    let hay = input[1] * 1000;
    let cover = input[2] * 1000;
    let piggyWeight = input[3] * 1000;

    let counter = 0;

    for (let i = 0; i < 30; i++) {
        counter++;
        food -= 300;

        if (counter % 2 === 0) {
            hay -= (food * 0.05);
        }

        if (counter % 3 === 0) {
            cover -= (piggyWeight * 1 / 3);
        }
    }

    if ((cover > 0) && (hay > 0) && (food > 0)) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    } else {
        console.log('Merry must go to the pet store!');
    }
}

solve(["10", "5", "5.2", "1"]);
