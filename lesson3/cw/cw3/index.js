// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++
// }
// console.log('=========');

//     2. перебрати його циклом for
// for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
// }
// console.log('=========');

//     additional3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let y = 0;
// while (y < array.length) {
//     if (y % 2 !== 0) {
//         console.log(array[y]);
//     }
//     y++
// }
// console.log('=========');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }
// console.log('=========');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let k = 0;
// while (k < array.length) {
//     if (array[k] % 2 === 0) {
//         console.log(array[k]);
//     }
//     k++
// }
// console.log('=========');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }
// console.log('=========');

// 7. замінити кожне число кратне additional3 на слово "okten"
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % additional3 === 0) {
//         array[i] = 'okten';
//     }
// }
// console.log(array);
// console.log('=========');

// 8. вивести масив в зворотньому порядку.
for (let j = array.length - 1; j >= 0; j--) {
    console.log(array[j]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let v = array.length-1;
while (v >= 0 ) {
    console.log(array[v]);
    v--
}
console.log('=========');

let z = array.length-1;
while (z >= 0 ) {
    if(z % 2 !== 0){
        console.log(array[z]);
    }
    z--
}
console.log('=========');

for (let j = array.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        console.log(array[j]);
    }

}
console.log('=========');

let x = array.length;
debugger
while (x >= 0) {
    if (array[x] % 2 === 0) {
        console.log(array[x]);
    }
    x--
}
console.log('=========');

for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }

}
console.log('=========');

for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten';
    }
    console.log(array[i]);
}








