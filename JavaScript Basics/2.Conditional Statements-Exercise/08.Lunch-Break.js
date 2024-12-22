function lunchBreak(input) {

    let movieName = input[0];
    let oneEpisodeDuration = Number(input[1]);
    let wholeBreakTime = Number(input[2]);

    let timeForLunch = 1 / 8 * wholeBreakTime;
    let timeFreeForPlaying = 1 / 4 * wholeBreakTime;

    let timeLeftAfterLunchAndPlay = wholeBreakTime - (timeForLunch + timeFreeForPlaying);

    if (timeLeftAfterLunchAndPlay >= oneEpisodeDuration) {
        let leftFreeTime = timeLeftAfterLunchAndPlay - oneEpisodeDuration;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftFreeTime)} minutes free time.`);
    } else {
        let timeNeededToWatch = oneEpisodeDuration - timeLeftAfterLunchAndPlay;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeededToWatch)} more minutes.`);
    }

}

lunchBreak(["Teen Wolf", "48", "60"]);
