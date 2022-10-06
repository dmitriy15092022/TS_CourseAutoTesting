let resultA1: any;

function triangle(a8: number, b8: number, c8: number) {
    if (a8 + b8 > c8 && b8 + c8 > a8 && c8 + a8 > b8) {
        return true;
    } else {
        return false;
    }
}

console.log(triangle(3, 0, 6));
