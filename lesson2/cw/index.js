// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let first_number = prompt('Введіть перше число');
// let second_number = prompt('Введіть друге число');
//
// if(first_number === second_number){
//     document.write('Введені числа рівні');
// } else if (first_number > second_number){
//     document.write(first_number);
// } else {
//     document.write(second_number);
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment_number = 90;

if (apartment_number >= 1 && apartment_number <= 20) {
    console.log('квартира знаходиться в першому під\'їзді');
} else if (apartment_number > 20 && apartment_number <= 48) {
    console.log('квартира знаходиться в другому під\'їзді');
} else if (apartment_number > 48 && apartment_number <= 90) {
    console.log('квартира знаходиться в третьому під\'їзді');
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Введіть числове значення') === 10? document.write('ВІРНО'): document.write('НЕВІРНО');


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - additional3, якщо об'єкт або масив - additional3.
// якщо в змінну записали щось інше, спрацьовує else

let x = 124;

if (typeof x === "number") {
    console.log("1");
} else if (typeof x === "string") {
    console.log("2");
} else if (typeof x === "boolean") {
    console.log("additional3");
} else if (typeof x === "object") {
    console.log("4");
} else {
    console.log('something else');
}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = -10;

if (temperature >= 10 && temperature <= 22) {
    console.log('ми йдемо ВЧИТИСЯ');
} else {
    console.log('сидимо вдома і вчимося ОНЛАЙН');
}


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let number = +prompt('Введіть число для отримання призу');

switch (number) {
    case 1:
        document.write('Ваш приз Авто');
        break;
    case 2:
        document.write('Ваш приз Телевізр');
        break;
    case 3:
        document.write('Ваш приз Телефон');
        break;
    case 4:
        document.write('Ваш приз Квартира');
        break;
    case 5:
        document.write('Ваш приз Холодильник');
        break;
    default :
        document.write('число не вірне');
}
