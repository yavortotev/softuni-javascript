class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let namesArr = [];

        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let curPlayer = this.invitedPlayers.find(p => p.name === name);

            if (curPlayer) {
                if (curPlayer.playerValue < playerValue) {
                    curPlayer.playerValue = playerValue;
                }
            } else {
                let playerObj = { name, age, playerValue };
                this.invitedPlayers.push(playerObj);
                namesArr.push(playerObj.name);
            }
        }

        return `You successfully invite ${namesArr.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.playerValue > playerOffer) {
            let diff = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`);
        }

        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age >= age) {
            return `${player.name} is above age limit!`;
        }

        let diff = age - player.age;
        if (diff <= 5) {
            return `${player.name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
        }

        return `${player.name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    }

    transferWindowResult() {
        let result = ['Players list:'];

        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => result.push(`Player ${p.name}-${p.playerValue}`));

        return result.join('\n');
    }
}

// ✅ Example usage
let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
