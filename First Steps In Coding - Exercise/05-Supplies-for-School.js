function vacationBooksList(input){

    let curBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursNeededPerDay = (curBookPages / pagesPerHour) / days

    console.log(hoursNeededPerDay)

}
vacationBooksList(['432','15','4'])