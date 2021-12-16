// //CALLBACK
// function getUp(isGetUp, cb) {
//     setTimeout(() => {
//         if (isGetUp) {
//             console.log('got up');
//             cb(null, true)
//         } else {
//             cb('I overslept')
//         }
//     }, 3000)
// }
//
// function getMoney(money, cb) {
//     setTimeout(() => {
//         if (money > 0) {
//             console.log(`Huurraay, I earned ${money}`)
//             cb(null, money)
//         } else {
//             cb('I don\'t have money');
//         }
//     }, 500)
// }
//
// function goToWork(money, cb) {
//     setTimeout(() => {
//         if (money > 0) {
//             money = money - 5;
//             console.log(`spent some money on travel - 5`)
//             cb(null, money)
//         } else {
//             cb('I don\'t have money');
//         }
//     }, 4000)
// }
//
// function buyLunch(money, cb) {
//     setTimeout(() => {
//         if (money > 0) {
//             money = money - 20;
//             console.log(`bought food a bit - 20`)
//             cb(null, money)
//         } else {
//             cb('I don\'t have money');
//         }
//     }, 1000)
// }
//
// function goHome(money, cb) {
//     setTimeout(() => {
//         if (money > 0) {
//             money = money - 5;
//             console.log(`spent money on travel back - 5`)
//             cb(null, money)
//         } else {
//             cb('I don\'t have money');
//         }
//     }, 4000)
// }
//
// function relaxHome(money, cb) {
//     setTimeout(() => {
//         if (money > 0) {
//             console.log(`I have only ${money} in the end day`)
//         } else {
//             cb('I don\'t have money');
//         }
//     }, 2000)
// }
//
// getUp(true, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         getMoney(1000, (err, money) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 goToWork(money, (err, money) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         buyLunch(money, (err, money) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 goHome(money, (err, money) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         relaxHome(money, err => console.log(err))
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });


function getUp(isGetUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isGetUp) {
                console.log('got up');
                resolve(true)
            } else {
                reject('I overslept')
            }
        }, 3000)
    })
}

function getMoney(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 0) {
                console.log(`Huurraay, I earned ${money}`)
                resolve(money)
            } else {
                reject('I don\'t have money');
            }
        }, 500)
    })
}

function goToWork(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 0) {
                money = money - 5;
                console.log(`spent some money on travel - 5`)
                resolve(money);
            } else {
                reject('I don\'t have money');
            }
        }, 4000)
    })
}

function buyLunch(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 0) {
                money = money - 20;
                console.log(`bought food a bit - 20`)
                resolve(money)
            } else {
                reject('I don\'t have money');
            }
        }, 1000)
    })
}

function goHome(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 0) {
                money = money - 5;
                console.log(`spent money on travel back - 5`)
                resolve(money)
            } else {
                reject('I don\'t have money');
            }
        }, 4000)
    })
}

function relaxHome(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 0) {
                console.log(`I have only ${money} in the end day`)
                resolve(money)
            } else {
                reject('I don\'t have money');
            }
        }, 2000)
    })
}

////PROMISE
// getUp(true)
//     .then(result => {
//         return getMoney(1200);
//     })
//     .then(money => {
//         return goToWork(money)
//     })
//     .then(money => {
//         return buyLunch(money)
//     })
//     .then(money => {
//         return goHome(money)
//     })
//     .then(money => {
//         return relaxHome(money)
//     })
//     .catch(err => {
//         console.log(err);
//     })

// // ASYNC AWAIT
// async function allDay() {
//     try {
//         let result = await getUp(true);
//         let money = await getMoney(1500);
//         money = await goToWork(money);
//         money = await buyLunch(money);
//         money = await goHome(money);
//         await relaxHome(money);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// allDay();
