// - Знайти та вивести довижину настипних стрінгових значень
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);


// - Перевести до великого регістру наступні стрінгові значення
let helloUp = 'hello world';
let loremUp = 'lorem ipsum';
let jsUp = 'javascript is cool';
console.log(helloUp.toUpperCase());
console.log(loremUp.toUpperCase());
console.log(jsUp.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
let helloLw = 'HELLO WORLD';
let loremLw = 'LOREM IPSUM';
let jsLw = 'JAVASCRIPT IS COOL';
console.log(helloLw.toLowerCase());
console.log(loremLw.toLowerCase());
console.log(jsLw.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   ';
console.log(dirtyString.trim());


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
let str = 'Каждый охотник желает знать';
let stringToArray = (str => str.split(' '));

console.log(stringToArray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let delete_characters = ((str, length) => str.substring(0, length));

console.log((delete_characters(str, 5)));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str1 = "HTML JavaScript PHP";
let insert_dash = (str) => str.toUpperCase().replaceAll(" ", "-");

document.writeln(insert_dash(str1)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let helloWorld = 'hello world';
let upFirstСharacter = (str => str[0].toUpperCase() + str.slice(1));

console.log(upFirstСharacter(helloWorld));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    let arrStr = str.split(' ');
    return arrStr.map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

console.log(capitalize(str));
