// - Дано натуральное число n. Выведите все числа от 1 до n.
let getNaturalNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
getNaturalNumbers(10);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let getNumbersRange = (A, B) => {
    if (A < B) {
        for (let i = A; i <= B; i++) {
            console.log(i);
        }
    } else {
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }
}
getNumbersRange(15, 1);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let changePosition = (array, i) => {
    if (array.length - 1 === i) {
        let currentElement = array[i];
        let changeElement = array[0];
        array[i] = changeElement;
        array[0] = currentElement;
        return array;
    } else if (array.length > 0 && i <= array.length - 1) {
        let currentElement = array[i];
        let changeElement = array[i + 1];
        array[i] = changeElement;
        array[i + 1] = currentElement;
        return array;
    } else {
        console.log('it\'s impossible');
    }
}

let newArray = changePosition([9, 8, 0, 4], 3);
console.log(newArray);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let zeroInTheEnd = (array) => {
    let arrZeros = [];
    let arrNumbers = [];
    let i = 0;
    let y = 0;
    for (const value of array) {
        if (value === 0) {
            arrZeros[i] = value;
            i++;
        } else {
            arrNumbers[y] = value;
            y++;
        }
    }
    let newArr = [...arrNumbers, ...arrZeros];
    return newArr
}

let arr = zeroInTheEnd([0,1,2,3,4]);
console.log(arr);
