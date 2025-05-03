function solve(commands) {

    let shoppingList = commands.splice(0, 1);
    let product = "";
    let products = [];

    for (let i = 0; i < shoppingList[0].length; i++) {
        let letter = shoppingList[0][i];

        if (letter !== '!') {
            product += letter;
        } else if (letter === '!') {
            products.push(product);
            product = "";
        }
    }
    products.push(product);

    let index = 0;
    while (commands[index] !== 'Go Shopping!') {

        let commandParts = commands[index].split(' ');
        let command = commandParts[0];
        let item = commandParts[1];

        if (command === 'Urgent') {
            if (!products.includes(item)) {
                products.unshift(item);
            }

        } else if (command === 'Unnecessary') {
            if (products.includes(item)) {
                products = products.filter(p => p !== item);
            }

        } else if (command === 'Correct') {
            if (products.includes(item)) {
                for (let z = 0; z < products.length; z++) {
                    let currentItem = products[z];
                    if (currentItem === item) {
                        products.splice(products.indexOf(currentItem), 1, commandParts[2]);
                    }
                }
            }

        } else if (command === 'Rearrange') {
            if (products.includes(item)) {
                products = products.filter(p => p !== item);
                products.push(item);
            }
        }

        index++;
    }

    console.log(products.join(', '));
}

solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);
