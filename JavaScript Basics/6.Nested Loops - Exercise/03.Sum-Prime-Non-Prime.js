function solve(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;

    let index = 0;

    while (input[index] !== 'stop') {
        let number = Number(input[index]);
        let isPrime = true;

        if (number < 0) {
            console.log("Number is negative.");
            index++;
            continue;
        }

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            primeSum += number;
        } else {
            nonPrimeSum += number;
        }

        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
      
solve(["0", "-9", "0", "stop"])