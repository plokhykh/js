// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers_arr = [1, 4, 45, -89, 4];
// let strings_arr = ['qwerty', 'lemon', 'cat', 'asds', 'bottle'];
// let array = [true, 1897, 'type', false, 0];
// console.log(numbers_arr);
// console.log(strings_arr);
// console.log(array);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];

for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 1000);
}
console.log(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 1; i < 11; i++) {
    document.write('<div>Lorem ipsum dolor sit amet </div>');
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 1; i < 11; i++) {
    document.write(`<div>${i} Lorem ipsum dolor sit amet </div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let y = 0;

while (y < 20) {
    document.write("<h1>Title</h1>")
    y++
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 1;

while (j < 21) {
    document.write(`<h1>${j} Title</h1>`);
    j++
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let num_arr = [790, 698, 231, 992, 791, 688, 290, 120, 372];

for (const number of num_arr) {
    console.log(number);
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str_arr = ['apple', 'lemon', 'pineapple', 'avocado', 'watermelon', 'banana', 'kiwi', 'orange', 'papaya', 'grapes'];

for (const str of str_arr) {
    console.log(str);
}


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr = [89, 1897, 'type', false, 0, 'qwerty', true, -98, 65433, 1];

for (const element of arr) {
    console.log(element);
}
console.log('---------');
for (const element of arr) {
    if (typeof element === 'boolean') {
        console.log(element);
    }
}
console.log('---------');
for (const element of arr) {
    if (typeof element === 'number') {
        console.log(element);
    }
}
console.log('---------');
for (const element of arr) {
    if (typeof element === 'string') {
        console.log(element);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr1 = [];
arr1[0] = '123';
arr1[1] = 'asdqwe';
arr1[2] = 167;
arr1[3] = 2;
arr1[4] = 1235;
arr1[5] = true;
arr1[6] = 'you';
arr1[7] = '45';
arr1[8] = false;
arr1[9] = 'kiwi';
arr1[10] = '0';

for (let elem of arr1) {
    console.log(elem);
}

console.log('---------');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log([i]);
    document.write(`<p>${i}</p>`);
}
console.log('---------');


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <= 100; i++) {
    console.log([i]);
    document.write(`<p>${i}</p>`);
}
console.log('---------');


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <= 100; i += 2) {
    console.log([i]);
    document.write(`<p>${i}</p>`);
}
console.log('---------');


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log([i]);
        document.write(`<p>${i}</p>`);
    }
}
console.log('---------');


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log([i]);
        document.write(`<p>${i}</p>`);
    }
}
