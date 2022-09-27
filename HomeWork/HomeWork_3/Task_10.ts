// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
// Для решения этой задачи нам помогут логические операторы **`|| &&`** а так же значения **true** или **false**.
// Исходя из условия **true** или **false** присвоить переменной **shouldGoToWork** текст **you can go to work**
// или **you can't go to work** выведите текст в консоле.

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
let shouldGoToWork: string;

if (key && documents && pen) {
    if (apple || orange) {
        shouldGoToWork = "you can go to work";
        console.log(shouldGoToWork);
    }
} else {
    shouldGoToWork = "you can't go to work";
    console.log(shouldGoToWork);
}
