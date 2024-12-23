function solve(input){


    let matchCount = Number(input[0])

    let startPoints = Number(input[1])

    let points=0
    let winCounter= 0
    let finalsGamesCounter = 0
    let sfCounter=0



    for(let index=2; index<=matchCount+1;index++){
             games = input[index]

              if (games=== 'W'){
                points+=2000
                winCounter++
            }else if(games ==='F'){
                points+=1200
                finalsGamesCounter++
            }else if(games=== 'SF'){
                points+=720
                sfCounter++
            }

    }



    
   

    console.log(`Final points: ${points+startPoints}`)
    console.log(`Average points: ${Math.floor(points/matchCount)}`);
    console.log(`${((winCounter/matchCount)*100).toFixed(2)}%`);
    



}
solve(["7",

"1200",

"SF",

"F",

"W",

"F",

"W","SF",

"W"])