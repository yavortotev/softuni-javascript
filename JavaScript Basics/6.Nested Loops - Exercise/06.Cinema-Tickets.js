function solve(input) {

    let kidsTickets = 0;
    let ticketCount = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let totalTicketsCount = 0;

    let index = 0;

    while (input[index] !== 'Finish') {

        let movieName = input[index];
        index++;

        let freeSeats = Number(input[index]);
        index++;

        while (input[index] !== 'End') {

            ticketCount++;
            totalTicketsCount++;
            let ticketType = input[index];
            index++;

            if (ticketType === 'kid') {
                kidsTickets++;
            } else if (ticketType === 'student') {
                studentTickets++;
            } else if (ticketType === 'standard') {
                standardTickets++;
            }

            if (ticketCount === freeSeats) {
                index--;
                break;
            }
        }

        console.log(`${movieName} - ${((ticketCount / freeSeats) * 100).toFixed(2)}% full.`);
        ticketCount = 0;
        index++;
    }

    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${((studentTickets / totalTicketsCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTicketsCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets / totalTicketsCount) * 100).toFixed(2)}% kids tickets.`);
}

solve(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])
