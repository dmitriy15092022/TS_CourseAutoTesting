//   Напишем программу для туристического терминала.
//   Создать переменную для стороны света в которую пользовател хотел отправиться.
//   После ввода данных (присвоение переменной определенного значения) мы должны вывести в консоль сообщение из списка.
//   Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

const way = "север";
let var1: string;

switch (way) {
    case "юг":
        var1 = "на юг пойдешь счастье найдешь";
        break;
    case "север":
        var1 = "на север пойдешь много денег найдешь";
        break;
    case "запад":
        var1 = "на запад пойдешь верного друга найдешь";
        break;
    case "восток":
        var1 = "на восток пойдешь разработчиком станешь";
        break;
    default:
        var1 = "туда не ходят даже волки!!! Попробуй еще раз!!!";
}

console.log(var1);