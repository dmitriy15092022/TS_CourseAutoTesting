//Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
//  `Variable: %variable_name% have type: %type_variable%`

const x = "text";
const y = 58;
const z = true;

console.log("'Variable: %", x, "% have type: %", typeof x, "%'");
console.log("'Variable: %", y, "% have type: %", typeof y, "%'");
console.log("'Variable: %", z, "% have type: %", typeof z, "%'");
