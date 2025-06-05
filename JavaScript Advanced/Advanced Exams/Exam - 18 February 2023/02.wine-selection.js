class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for ${price}$.`;
    }

    openBottle(wineName) {
        const wine = this.wines.find(w => w.wineName === wineName);

        if (!wine) {
            throw new Error("The wine you're looking for is not found.");
        }

        if (!wine.paid) {
            throw new Error(`${wineName} needs to be paid before opening the bottle.`);
        }

        this.wines = this.wines.filter(w => w !== wine);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            const result = [];

            result.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);

            this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach(w => {
                    result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`);
                });

            return result.join('\n');
        }

        const filtered = this.wines.filter(w => w.wineType === wineType);

        if (filtered.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        return filtered
            .map(w => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)
            .join('\n');
    }
}


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose'),
selection.cellarRevision('Rose')