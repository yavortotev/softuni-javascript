function repainting(input) {

    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);


    let totalNylonQty = nylonQty + 2
    let totalNylonPrice = totalNylonQty * 1.5

    let totalpaintQty = (0.1 * paintQty) + paintQty
    let totalPaintPrice = totalpaintQty * 14.5

    let thinnerPrice = thinnerQty * 5

    let totalMaterils = thinnerPrice + totalPaintPrice + totalNylonPrice + 0.4

    let workPerHour = 0.3 * totalMaterils

    let totalLaberPrice = workPerHour * workHours

    let totalBudget = totalMaterils + totalLaberPrice


    console.log(totalBudget)

}

repainting(['10', '11', '4', '8'])
