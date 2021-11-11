// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [1, 5, 67, 345, 78, 3, 45, 0, 87, 1234];
let result = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9];
console.log(result);


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book = {
//     name: 'Code: The Hidden Language of Computer Hardware and Software',
//     pages: 400,
//     ganre: 'computer literature'
// }


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

// let book = {
//     name: 'It: A Novel',
//     pages: 1248,
//     ganre: 'Horror',
//     author: 'Stephen King'
// }


// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {
        name: 'It: A Novel',
        pages: 1248,
        ganre: 'Horror',
        author: 'Stephen King'
    },
    {
        name: 'Code: The Hidden Language of Computer Hardware and Software',
        pages: 400,
        ganre: 'computer literature',
        author: 'Charles Petzold'
    },
    {
        name: 'Le comte de Monte Cristo',
        pages: 768,
        ganre: 'adventure, historical',
        author: 'Alexandre Dumas'
    }
]

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).

let height = 23;
let width = 10;
let s = height * width;
console.log(s);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

const Pi = 3.14;
let heightC = 10;
let dC = 4;
let v = Pi * (dC**2)/4*heightC;
console.log(v);


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = 3 ** 2 + 4 ** 2;
k = Math.sqrt(k) ;
console.log(k);
