let result1: any;

function trimString(str3: string, a: number, b: number) {
    result1 = str3.slice(a, b);
    return result1;
}

console.log(trimString("1234567890", 3, 8));
