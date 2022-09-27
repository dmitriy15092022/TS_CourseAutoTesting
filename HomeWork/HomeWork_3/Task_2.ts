// Создайте переменные:
// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

const age = 36;
const secPerM = 60;
const minPerH = 60;
const hoursPerD = 24;
const dayPerYear = 365;
const myAgeInSeconds: number = age * dayPerYear * hoursPerD * minPerH * secPerM;

console.log(myAgeInSeconds);
