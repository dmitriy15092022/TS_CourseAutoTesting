function getSum(min: number, max: number): any {
    if (min === max) {
        return "1 Since both are same";
    } else {
        return ((max - min + 1) * (min + max)) / 2;
    }
}

console.log(getSum(1, 1));
