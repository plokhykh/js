const Pi = 3.14;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function getRectangleArea(a, b) {
    return a * b;
}

let rectangleArea = getRectangleArea(20, 40);
console.log(rectangleArea);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function getCircleRadius(r) {
    return Pi * r ** 2;
}

let circleRadius = getCircleRadius(10);
console.log(circleRadius);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function getСylinderArea(h, r) {
    return 2 * Pi * r * (h + r);
}

let cylinderArea = getСylinderArea(30, 25);
console.log(cylinderArea);


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 662, 789, 56, 45, 80, 954, 3, 50];

function elementArray(array) {
    for (let element of array) {
        console.log(element);
    }
}

elementArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`)
}

createParagraph("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(text) {
    document.write('<ul>')
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>')
}

createList("Ad aliquam consequatur cum dicta et exercitationem explicabo fuga");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createAnotherList(text, count) {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createAnotherList("Lorem ipsum dolor sit amet, consectetur adipisicing elit", 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromArray(array) {
    document.write('<ul>')
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write('</ul>')
}

let array = ['34', true, 1096, 'qwerty', 98, 0, '1234', false - 64];
createListFromArray(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        age: 18,

    },
    {
        id: 2,
        name: 'Ervin Howell',
        age: 38,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        age: 23,

    }
];

function createUserCard(users) {
    for (let user of users) {
        document.write('<div>');
        document.write(`<p>${user.id}. User ${user.name} have ${user.age} years old</p>`)
        document.write('</div>')
    }
}

createUserCard(usersList);
