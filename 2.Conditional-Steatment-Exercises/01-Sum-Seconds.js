function sumSeconds(input){

    let timeFirst = Number(input[0]);
    let timeSecind = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecind + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10){

        console.log(`${minutes}:0${seconds}`)

    }else{
        console.log(`${minutes}:${seconds}`)
    }

}

//Code with Ternary Operator:
// console.log(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);


sumSeconds(['12','12','10'])