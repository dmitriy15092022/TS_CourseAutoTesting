let x1: number;
let sumX: number;

function getSum(x1: number) {
    sumX = ((x1 - 1) / 2) * x1 + x1;
    return sumX;
}

console.log(getSum(100));
