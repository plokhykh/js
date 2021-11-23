// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let getMinNumber = (a, b, c) => {
    if (a < b && a < c) {
        return a
    } else if (b < c && b < a) {
        return b
    } else if (c < a && c < b) {
        return c
    }
}

let min = getMinNumber(10, 3, 5);
console.log(min);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let getMaxNumber = (a, b, c) => {
    if (a > b && a > c) {
        return a
    } else if (b > c && b > a) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}

let max = getMaxNumber(10, 3, 15);
console.log(max);

// - створити функцію яка повертає найбільше число з масиву
let getMaxValue = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max
}

let maxNumberArray = getMaxValue([1, 45, 67, 89, 120, 0]);
console.log(maxNumberArray);


// - створити функцію яка повертає найменьше число з масиву
let getMinValue = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min
}

let minNumberArray = getMinValue([1, 45, 67, 89, 120, 0]);
console.log(minNumberArray);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let getSumOfArray = (array) => {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum
}

let sumArray = getSumOfArray([1, 2, 3, 4, 5]);
console.log(sumArray);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let getAverageOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum += element;
    }
    return sum / array.length;
}

let average = getAverageOfArray([1, 2, 3, 4, 5]);
console.log(average);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let countNumber = () => {
    let max = arguments[0];
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    console.log(`max ${max}`);
    return min;
}

let something = countNumber(32, 48, 1, 2345, 765, 87, 105);
console.log(`min ${something}`);


// - створити функцію яка заповнює масив рандомними числами
let getRandomArray = (count) => {
    debugger
    let array = [];
    for (let i = 0; i < count; i++) {
        array[i] = Math.round(Math.random() * 100)
    }
    return array
}

let randomArray = getRandomArray(45);
console.log(randomArray);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let getRandomArrayLimit = (count, limit) => {
    debugger
    let array = [];
    for (let i = 0; i < count; i++) {
        array[i] = Math.round(Math.random() * limit)
    }
    return array
}

let randomArrayLimit = getRandomArrayLimit(20, 30);
console.log(randomArrayLimit);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let getReversArray = (array) => {
    let reversArray = [];
    for (let i = 0; i < array.length; i++) {
        reversArray[i] = array[(array.length - 1) - i]
    }
    return reversArray
}

let reverseArray = getReversArray([1, 2, 3, 4, 5]);
console.log(reverseArray);
