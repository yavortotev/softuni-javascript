function solve(input){


    let actorsName = input[0]

    let academyScore = Number(input[1]);
    
    //let juriCount = Number(input[2]) or input.length in the loop ...

    let points = 0

    let totalScore = 1250.5
    let totalActorPoints= academyScore
    let isScoreEnought =0

    

    for(let index=3; index <input.length; index+=2){

        juriName = input[index]
        juriPoints = Number(input[index+1])

        points = ((juriName.length) * juriPoints )/2
        totalActorPoints+=points

        if (totalActorPoints >totalScore){
            isScoreEnought =1
            break

        }


       
    }

    if (isScoreEnought === 1){
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${(totalActorPoints.toFixed(1))}!`);
    }else{
        let pointNeeded = totalScore- totalActorPoints
        console.log(`Sorry, ${actorsName} you need ${pointNeeded.toFixed(1)} more!`)
    }

    
}
solve(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])