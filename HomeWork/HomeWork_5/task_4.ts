let result2 = 0;

function getSum(a4: number) {
    let digit;
    while (a4) {
        digit = a4 % 10;
        result2 += digit;
        a4 = (a4 - digit) / 10;
    }
    return result2;
}

console.log(getSum(5555557));
