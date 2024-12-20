function depositCalculator(input){

    let deposiSum = Number(input[0]);
    let depostTime = Number(input[1]);
    let anualInteresFee = Number(input[2]);
    

    let sum = deposiSum + depostTime * ((deposiSum * (anualInteresFee / 100)) / 12)
console.log(sum)
}
depositCalculator(['2350','6','7']) 