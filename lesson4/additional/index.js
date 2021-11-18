// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function addition() {
    let sum = 0;
    if (arguments.length === 1) {
        return arguments[0]
    } else if (arguments.length > 1) {
        for (const argument of arguments) {
            sum += argument
        }
    }
    return sum
}

console.log(addition(1, 3, 7));


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function getSumOfArrays(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArray[j] = arr1[j] + arr2[j];
        }
    }
    return newArray
}

let summedArray = getSumOfArrays([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(summedArray);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function getObjectKeys(array) {
    let arrayKeys = [];
    let i = 0;
    for (let object of array) {
        for (let element in object) {
            arrayKeys[i] = element;
            i++
        }
    }
    return arrayKeys;
}

let arrayKeys = getObjectKeys([{ name: 'Dima', age: 13 }, { model: 'Camry' }]);
console.log(arrayKeys);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function getObjectValues(array) {
    let arrayValues = [];
    let i = 0;
    for (let object of array) {
        for (let element in object) {
            arrayValues[i] = object[element];
            i++
        }
    }
    return arrayValues
}

let arrayValues = getObjectValues([{ name: 'Dima', age: 13 }, { model: 'Camry' }]);
console.log(arrayValues);
