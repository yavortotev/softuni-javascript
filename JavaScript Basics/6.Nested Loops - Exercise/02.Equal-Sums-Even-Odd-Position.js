function solve(input) {

    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);

    let result = '';

    for (let curNum = startNumber; curNum <= endNumber; curNum++) {
        let evenCount = 0;
        let oddCount = 0;
        let curNumStr = curNum.toString();

        for (let i = 0; i < curNumStr.length; i++) {
            let digit = Number(curNumStr[i]);

            if (i % 2 === 0) {
                evenCount += digit;
            } else {
                oddCount += digit;
            }
        }

        if (evenCount === oddCount) {
            result += curNum + ' ';
        }
    }

    console.log(result);
}

solve ([ '100000', '100050',  ])