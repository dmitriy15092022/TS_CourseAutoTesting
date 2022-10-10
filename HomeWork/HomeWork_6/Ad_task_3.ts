// Var1
// type TCat = {
//     name: string;
//     age: number;
// };
//
// const cat = {
//     name: "Енчик",
//     age: 3,
// };
//
// const TCat = JSON.parse(JSON.stringify(cat));
// cat.age = 6;
// console.log("cat.age:", cat.age);
// console.log("TCat.age:", TCat.age);

//Var2
interface ICat {
    name: string;
    age: number;
}
const cat = {
    name: "Енчик",
    age: 3,
};

const ICat = Object.assign({}, cat);
cat.age = 6;
console.log("cat.age:", cat.age);
console.log("ICat.age:", ICat.age);
