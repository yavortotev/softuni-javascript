function solve(data) {
    let stringData = data[0].toString();
    let pattern = /(::(?<word>[A-Z][a-z]{2,})::|\*\*(?<word1>[A-Z][a-z]{2,})\*\*)/g;
    let digitPattern = /[0-9]/g;
    let coolThreshold = 1;
    let coolEmojis = [];

    let digits = stringData.match(digitPattern);

    for (let i = 0; i < digits.length; i++) {
        let num = Number(digits[i]);
        coolThreshold *= num;
    }

    let matches = stringData.match(pattern);
    let emojisFound = matches ? matches.length : 0;

    if (matches) {
        for (let emoji of matches) {
            let sum = 0;

            for (let i = 0; i < emoji.length; i++) {
                let letter = emoji[i].charCodeAt(0);
                if ((letter >= 97 && letter <= 122) || (letter >= 65 && letter <= 90)) {
                    sum += letter;
                }
            }

            if (sum > coolThreshold) { // You asked — remove "=" if Judge is strict
                coolEmojis.push(emoji);
            }
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojisFound} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])