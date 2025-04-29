function solve(input) {
    let customerType = input.pop();
    let totalPriceBeforeTax = 0;

    for (let i = 0; i < input.length; i++) {
        let price = Number(input[i]);

        if (price < 0) {
            console.log('Invalid price!');
        } else {
            totalPriceBeforeTax += price;
        }
    }

    let taxes = totalPriceBeforeTax * 0.2;
    let totalPriceWithTaxes = totalPriceBeforeTax + taxes;

    if (totalPriceWithTaxes === 0) {
        console.log('Invalid order!');
    } else if (customerType === 'special') {
        totalPriceWithTaxes -= totalPriceWithTaxes * 0.1;

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceBeforeTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    } else if (customerType === 'regular') {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceBeforeTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }
}

solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
