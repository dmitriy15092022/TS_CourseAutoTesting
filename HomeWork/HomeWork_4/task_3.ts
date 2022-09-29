const str3 = "произвольная строка";
const str0 = "Вы вышли за границу строки";
const numb = 20;

const res2 = numb > str3.length ? str0 : str3.charAt(numb);

console.log(res2);
