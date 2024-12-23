function trekkingMania(input) {

    let groupsCount = Number(input[0]);

    let musalaCount = 0;
    let monbvlanCount = 0;
    let kilimidjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;




    for (let i = 1; i < input.length; i++) {

        let peopleInGroup = Number(input[i])

        if (peopleInGroup <= 5) {

            musalaCount += peopleInGroup;

        } else if (peopleInGroup <= 12) {

            monbvlanCount += peopleInGroup;
        } else if (peopleInGroup <= 25) {

            kilimidjaroCount += peopleInGroup;

        } else if (peopleInGroup <= 40) {

            k2Count += peopleInGroup;

        } else {

            everestCount += peopleInGroup
        }

    }

    musalaP = musalaCount / (musalaCount + monbvlanCount + kilimidjaroCount + k2Count + everestCount) * 100

    monbvlanP = monbvlanCount / (musalaCount + monbvlanCount + kilimidjaroCount + k2Count + everestCount) * 100

    kilimidjarP = kilimidjaroCount / (musalaCount + monbvlanCount + kilimidjaroCount + k2Count + everestCount) * 100

    k2P = k2Count / (musalaCount + monbvlanCount + kilimidjaroCount + k2Count + everestCount) * 100

    everestP = everestCount / (musalaCount + monbvlanCount + kilimidjaroCount + k2Count + everestCount) * 100


    console.log(`${musalaP.toFixed(2)}%`);
    console.log(`${monbvlanP.toFixed(2)}%`);
    console.log(`${kilimidjarP.toFixed(2)}%`);
    console.log(`${k2P.toFixed(2)}%`);
    console.log(`${everestP.toFixed(2)}%`);

}

trekkingMania(["10","10","5","1","100","12","26", "17", "37", "40", "78"])