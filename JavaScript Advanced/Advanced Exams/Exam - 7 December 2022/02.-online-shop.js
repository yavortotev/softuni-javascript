class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const productFound = this.products.find(p => p.product === product);

        if (!productFound) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        if (minimalQuantity <= productFound.quantity) {
            return `You have enough from product ${product}.`;
        }

        const difference = minimalQuantity - productFound.quantity;
        productFound.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;
    }

    sellProduct(product) {
        const soldProduct = this.products.find(p => p.product === product);

        if (!soldProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        soldProduct.quantity -= 1;
        this.sales.push({ product, quantity: soldProduct.quantity });
        this.warehouseSpace += 1;

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }

        const result = [];
        result.push(`You sold ${this.sales.length} products today!`);
        result.push("Products in the warehouse:");
        this.sales.forEach(sale => {
            result.push(`${sale.product}-${sale.quantity} more left`);
        });

        return result.join('\n');
    }
}

 const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision())