let result7 = 1;

function fact(a7: number) {
    while (a7) {
        result7 *= a7--;
    }
    return result7;
}

console.log(fact(10));
