// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.body.onclick = function (e){
    let objInfo = {
        tagName: e.target.localName,
        classList: e.target.classList,
        idList: e.target.id,
        width: e.target.clientWidth,
        height: e.target.clientHeight,
    }
    console.log(objInfo);
}


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


//     - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 28, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];

let userList = document.getElementsByClassName('user-list')[0];
let filters = document.getElementsByClassName('filter')[0];

function createUserList(users) {
    if (document.getElementsByClassName('user-list')[0].innerText) {
        document.getElementsByClassName('user-list')[0].innerText = ''
    }
    for (const user of users) {
        let div = document.createElement('div');
        let userInfo = '';
        for (const key in user) {
            if (key === 'address') {
                userInfo = `${userInfo}\n ${key}:\n city: ${user[key].city}\n street: ${user[key].street}\n number: ${user[key].number}`
            } else {
                userInfo = `${userInfo}\n ${key}: ${user[key]}`
            }
        }
        div.innerText = userInfo;
        userList.appendChild(div);
    }
}

createUserList(usersWithAddress);

filters.onclick = function () {
    let filteredUsers = [];
    filteredUsers = !filteredUsers.length ? usersWithAddress : filteredUsers;
    let statusCheck = document.body.getElementsByTagName('input').status.checked;
    let ageMore29 = document.body.getElementsByTagName('input').age.checked;
    let liveInKyiv = document.body.getElementsByTagName('input').city.checked;

    if (statusCheck && ageMore29 && liveInKyiv) {
        filteredUsers = usersWithAddress.filter(item => item.status === false && item.age > 29 && item.address.city === 'Kyiv');
    } else if (statusCheck && ageMore29) {
        filteredUsers = usersWithAddress.filter(item => item.status === false && item.age > 29);
    } else if (statusCheck && liveInKyiv) {
        filteredUsers = usersWithAddress.filter(item => item.status === false && item.address.city === 'Kyiv');
    } else if (ageMore29 && liveInKyiv) {
        filteredUsers = usersWithAddress.filter(item => item.age > 29 && item.address.city === 'Kyiv');
    } else if (ageMore29) {
        filteredUsers = usersWithAddress.filter(item => item.age > 29);
    } else if (liveInKyiv) {
        filteredUsers = usersWithAddress.filter(item => item.address.city === 'Kyiv');
    } else if (statusCheck) {
        filteredUsers = usersWithAddress.filter(item => item.status === false);
    }
    createUserList(filteredUsers);
}


//     *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let prevBtn = document.getElementsByClassName('prev')[0];
let nextBtn = document.getElementsByClassName('next')[0];
let images = document.getElementsByTagName('img');
let currentImgNumber = 0;
nextBtn.onclick = function (){
    images[currentImgNumber].style.display = 'none';
    currentImgNumber ++;
    if(currentImgNumber >= images.length){
        currentImgNumber = 0;
    }
    images[currentImgNumber].style.display = 'block';
}

prevBtn.onclick = function (){
    images[currentImgNumber].style.display = 'none';
    currentImgNumber = currentImgNumber - 1;
    if(currentImgNumber < 0){
        currentImgNumber = images.length-1;
    }
    images[currentImgNumber].style.display = 'block';
}


// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
document.body.onmouseup = function getSelectedText() {
    if (window.getSelection()) {
        let select = window.getSelection().getRangeAt(0);
        let selectionContents = select.extractContents();
        let span = document.createElement('span');
        span.style.color = 'red';
        span.appendChild(selectionContents);
        select.insertNode(span);
    }
}
