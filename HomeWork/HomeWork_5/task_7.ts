let result7 = 1;

((a7: number) => {
    while (a7) {
        result7 *= a7--;
    }
    console.log(result7);
})(10);
