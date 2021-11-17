// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let even_numbers = [];

for (let i = 0; i < 100; i += 2) {
    for (let j = 0; j < 50; j++) {
        even_numbers[j] = i += 2;
    }
}
console.log(even_numbers);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let odd_numbers = [];
debugger
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        for (let j = 0; j < 50; j++) {
            odd_numbers[j] = i;
        }
    }

}
console.log(odd_numbers);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let rand_numbers = [];

for (let i = 0; i < 20; i++) {
    rand_numbers[i] = Math.floor(Math.random() * 20);
}
console.log(rand_numbers);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let numbers_array = [];

for (let i = 0; i < 20; i++) {
    numbers_array[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
console.log(numbers_array);


// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < numbers_array.length; i += 3) {
    console.log(numbers_array[i]);
}
console.log('======');


// additional3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < numbers_array.length; i += 3) {
    if (i % 2 === 0) {
        console.log(numbers_array[i]);
    }
}


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let new_array = [];

for (let i = 0; i < numbers_array.length; i += 3) {
    if (i % 2 === 0) {
        new_array.push(i);
        console.log(numbers_array[i]);
    }
}
console.log(new_array);
console.log("======");


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, additional3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i - 1]);
    }
}
console.log('======');


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arr_prices = [100, 250, 50, 168, 120, 345, 188];
let price = 0;

for (let i = 0; i < arr_prices.length; i++) {
    price += arr_prices[i];
    if (arr_prices.length - 1 === i) {
        price = price / arr_prices.length;
    }
}
console.log(price);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let array5 = [];

for (let i = 0; i < numbers_array.length; i++) {
    array5[i] = numbers_array[i] * 5;
}
console.log(array5);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let other_arr = [9, true, 'string', 123, -234, 0, 'qwerty', false, 23];
let num_arr = [];

for (let num of other_arr) {
    if (typeof num === 'number') {
        num_arr.push(num);
    }
}
console.log(num_arr);


// - Дано 2 масиви з рівною кількістю об'єктів. З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

let usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];

let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];


let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j];
            usersWithCities[i] = usersWithId[i];
        }
    }
}
console.log(usersWithCities);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
for (let number of array) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let new_numbers = [];

for (let i = 0; i < array.length; i++) {
    new_numbers[i] = array[i];
}

console.log(new_numbers);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let str_arr = ['a', 'b', 'c'];
let word = '';

// for (let i = 0; i < str_arr.length; i++) {
//     word +=str_arr[i];
//
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i < str_arr.length) {
//     word += str_arr[i];
//     i++
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (let string of str_arr) {
    word += string;
}
console.log(word);
