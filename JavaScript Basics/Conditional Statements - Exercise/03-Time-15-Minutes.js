function time15Minutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime  = hours * 60 + minutes + 15 

      let newHour = Math.floor(totalTime / 60)
      let newMin = totalTime % 60

    if (newHour === 24){
        newHour = 0}


        if (newMin < 10){
            console.log(`${newHour}:0${newMin}`)

        }else{
            console.log(`${newHour}:${newMin}`)
        }
    }

    time15Minutes(['1','46'])