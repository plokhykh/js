// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.\
let btn = document.getElementsByTagName('button')[0];

btn.onclick = function () {
    let f1 = document.forms[0];
    let f2 = document.forms[1];
    let user = {
        login: f1.login.value,
        age: f1.age.value,
        name: f2.userName.value,
        lastName: f2.lastName.value
    }
    console.log(user);
};


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let tableBtn = document.getElementsByClassName('table-btn')[0];

tableBtn.onclick = function () {
    let rows = document.getElementsByTagName('input').rows.value;
    let cells = document.getElementsByTagName('input').cells.value;
    let text = document.getElementsByTagName('input').text.value;
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        table.appendChild(tr)
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.appendChild(td)
        }
    }
    document.body.appendChild(table);
}


//     - Сворити масив не цензцрних слів. Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let obsceneWords = ['дурак', 'дура', 'бля', 'конченый', 'пипец'];

let sendBtn = document.getElementsByClassName('btn')[0];
sendBtn.onclick = function () {
    let word = document.getElementsByTagName('input').word.value;
    if (obsceneWords.find(item => item === word)) {
        alert('You entered an obscene word');
    }
}


// - Сворити масив не цензцрних слів. Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова. Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let inputBtn = document.getElementsByClassName('input-btn')[0];

inputBtn.onclick = function () {
    let sentence = document.getElementsByTagName('input').sentence.value;
    obsceneWords.forEach(item => {
        if(sentence.includes(item)){
            alert('You entered an obscene word');
        }
    })
}
