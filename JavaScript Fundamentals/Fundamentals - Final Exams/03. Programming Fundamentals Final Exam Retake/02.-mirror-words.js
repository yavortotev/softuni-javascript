function solve(input) {
    const text = input.join('');
    const mirrorWords = [];
    const wordPairs = [];

    const regex = /([#@])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
        const word1 = match[2];
        const word2 = match[3];
        wordPairs.push(`${word1} <=> ${word2}`);

        const reversed = word2.split('').reverse().join('');
        if (word1 === reversed) {
            mirrorWords.push(`${word1} <=> ${word2}`);
        }
    }

    if (wordPairs.length === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${wordPairs.length} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(', '));
    }
}


solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )
    