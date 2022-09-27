// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку,
// а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

const count = 42;
const userName = "42";

const strCount1 = `${count}`;
const strCount2 = String(count);
const numUserName1: number = +userName;
const numUserName2: number = parseInt(userName);

console.log(typeof strCount1, "---", strCount1);
console.log(typeof strCount2, "---", strCount2);
console.log(typeof numUserName1, "---", numUserName1);
console.log(typeof numUserName2, "---", numUserName2);
