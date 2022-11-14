class Calculater {
    amount(a: number, b: number) {
        return a + b;
    }
    difference(a: number, b: number) {
        return a - b;
    }
    multiplication(a: number, b: number) {
        return a * b;
    }
    division(a: number, b: number) {
        return a / b;
    }
    degree(a: number, b: number) {
        return a ** b;
    }
}
const getCalculater = new Calculater();
//Positive
console.log(getCalculater.amount(3, 5) === 8 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.amount(0, 10) === 10 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.difference(0, 3) === -3 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.difference(3, 3) === 0 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.multiplication(5, 2) === 10 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.multiplication(-1, -1) === 1 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.division(10, 2) === 5 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.division(20, -5) === -4 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.degree(2, 2) === 4 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.degree(3, 3) === 27 ? "`Тест` прошел" : "`Тест` свалился");
//Negativ
console.log(getCalculater.amount(3, 0) === -3 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.amount(-1, 10) === 11 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.difference(-3, 3) === 6 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.difference(0, 0) === 1 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.multiplication(1, 0) === 1 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.multiplication(-1, 1) === 1 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.division(10, 10) === 0 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.division(20, 1) === 19 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.degree(2, -2) === 4 ? "`Тест` прошел" : "`Тест` свалился");
console.log(getCalculater.degree(-3, -3) === 27 ? "`Тест` прошел" : "`Тест` свалился");
