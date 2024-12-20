function basketballEquipment(input){

    let anualBascetballFee = Number(input[0]);
    
    let bascetballShouse = 0.6 * anualBascetballFee
    
    let bascetballClouthcing = 0.8 * bascetballShouse
    
    let bascetballBall = 1 / 4 * bascetballClouthcing
    
    let bascetballAccsesories = 1 / 5 * bascetballBall
    
    let totalExepenses = anualBascetballFee + bascetballShouse + bascetballClouthcing + bascetballBall + bascetballAccsesories
    
    console.log(totalExepenses.toFixed(2))
    
    }
    
    basketballEquipment(['320'])