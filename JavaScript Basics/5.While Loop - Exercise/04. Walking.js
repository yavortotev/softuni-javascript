function solve(input){

    let index= 0
    let goalSteps = 10000 
    let stepsCount =0
    let isGoalReach =0
    let laststeps = Number(input[input.length -1])




    while(input[index]!=='Going home'){

        let step = Number(input[index])
        stepsCount+=step
        
        if (stepsCount >= goalSteps){
            isGoalReach =1
            break;

        }

     index++
    }
           if (stepsCount < goalSteps ){
    stepsCount = stepsCount + laststeps
    }

    if (stepsCount >=goalSteps || isGoalReach ===1){

        console.log("Goal reached! Good job!")
        console.log(`${stepsCount-goalSteps} steps over the goal!`)
    }else{
        let neededSteps = goalSteps-stepsCount
        console.log(`${neededSteps} more steps to reach goal`);
    }


}
solve(["1500", "3000", "250", "1548","2000", "Going home", "2000"])







