// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, additional3.14, 2.7, 16, true,
// false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let a = 1;
// let b = 10;
// let c = -999;
// let d = 123;
// let e = additional3.14;
// let f = 2.7;
// let g = 16;
// let h = true;
// let i = false;

// console.log(hello, owu, com, a, b, c, d, e, f, g, h, i);
// alert (hello);
// alert(owu);
// alert(com);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// document.write(`${hello} ${owu} ${com} ${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i}`);


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// hello = 'word';
// owu = 'hello';
// com = 25;
// a = 'okten';
// b = -45;
// c = additional3.78;
// d = 'owu';
// e = 1234;
// f = true;
// g = -85;
// h = false;
// i = 55.67;

// console.log(hello, owu, com, a, b, c, d, e, f, g, h, i);
// alert (hello);
// alert(owu);
// alert(com);
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// document.write(`${hello} ${owu} ${com} ${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i}`);


// - Створити additional3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person.
// (Не об'єкт)

// let firstName = 'Maryna';
// let middleName = 'Borisovna';
// let lastName = 'Plokhykh';
//
// let person = `${lastName} ${firstName} ${middleName}`


// - За допомогою 3х різних prompt() отримати additional3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt('What\'s your name?');
// let middleName = prompt('What\'s your middle name?');
// let age = prompt('How old are you?');
//
// alert(`Congratulation ${name} ${middleName}. You have ${age} years old`)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a, typeof b, typeof c);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(5 >= 6);
console.log(10 >= 10);
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(123 !== 123);
console.log(123 === 123);


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); //205
// document.write(str - a + "<br/>");//15
// document.write(str * "2" + "<br/>");//40
// document.write(str / 2 + "<br/>");//10

// Потому что + разценивается как оператор конкатенации строки и числа. Для остальных операций строка приводится к числу,
//   если это возможно, и производится математическая операция
