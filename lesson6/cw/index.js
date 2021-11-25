// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let validationName = (name => {
    let arrName = [];
    if (name.includes('.')) {
        arrName = name.split('.')
    } else if (name.includes('-')) {
        arrName = name.split('-')
    } else if (name.includes('_')) {
        arrName = name.split('_')
    }
    return arrName.filter(item => item).join(' ')
});

console.log(validationName(n3));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumbersArr = (count) => {
    let numbersArr = [];
    for (let i = 0; i < count; i++) {
        numbersArr.push(Math.floor(Math.random() * (100 - 0)) + 0);
    }
    return numbersArr
}
let arr = randomNumbersArr(10);
console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortArr = arr.sort((a, b) => a - b);
console.log(sortArr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let strNumbers = arr.map(num => String(num));
console.log(strNumbers);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3
let nums = [11, 21, 3];

let sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    }
}
console.log(sortNums('descending', nums));


// - є масив
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
// -- відсортувати його за спаданням за monthDuration
let descMonthDuration = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration);
console.log(descMonthDuration);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCourses = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(filterCourses);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
let cutString = (str, n) => {
let arr = [];
    while (str.length) {
        arr.push(str.substring(0,n));
        str = str.slice(n)
    }
    return arr
}
console.log(cutString('наслаждение', 3)); // [нас,лаж,ден,ие]
