// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 6;

if (time >= 0 && time <= 15) {
    console.log('перша частина години');
} else if (time > 15 && time <= 30) {
    console.log('друга частина години');
} else if (time > 30 && time <= 45) {
    console.log('третя частина години');
} else if (time > 45 && time <= 59) {
    console.log('четверта частина години');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;

if (day > 0 && day <= 10) {
    console.log('перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('друга декада місяця');
} else if (day > 20 && day <= 31) {
    console.log('третя декада місяця');
}


// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = false;

switch (test) {
    case true:
        console.log('Неправильно');
        break;
    case false:
        console.log('Вірно');
        break;
}

let ternary_operator = test === true ? 'Неправильно' : 'Вірно';
console.log(ternary_operator);


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -additional3


let a = 0;

if (a === 0) {
    console.log('Невірно');
} else {
    console.log('Вірно');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let day_week = 7;

switch (day_week) {
    case 1:
        console.log('Прогулянка з друзями');
        break;
    case 2:
        console.log('Похід до кінотеатру');
        break;
    case 3:
        console.log('Робоча зустріч');
        break;
    case 4:
        console.log('Відпустка');
        break;
    case 5:
        console.log('Подорож');
        break;
    case 6:
        console.log('Навачання');
        break;
    case 7:
        console.log('Прочитати книжку');
        break;
}


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = 2020 % 4 === 0? 'високосний рік' : 'невисокосний рік';
console.log(year);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let name_js = prompt('Яка «офіційна» назва JavaScript?') === 'ECMAScript' ? document.write('Правильно!') : document.write('Не знаєте? ECMAScript!');



