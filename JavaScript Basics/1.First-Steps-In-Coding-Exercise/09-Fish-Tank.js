function fishTank(input){

let lenghgt = Number(input[0]);
let width = Number (input[1]);
let height = Number (input[2]);
let persent = Number(input[3]);

let totalVolume = lenghgt * width  * height
let totalVolumeInLiters = totalVolume / 1000

let occupiedValume = (persent / 100 ) * totalVolumeInLiters
let freeValue = totalVolumeInLiters - occupiedValume

console.log(freeValue)  

}

fishTank(['105','77','89','18.5'])
