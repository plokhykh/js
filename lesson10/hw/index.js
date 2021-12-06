// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let idText = document.getElementById('text');
let btn = document.getElementsByTagName('button')[0];
btn.onclick = function () {
    idText.style.display = 'none';
}


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let dsprBtn = document.getElementsByClassName('dspr-btn')[0];
dsprBtn.onclick = function () {
    this.style.display = 'none';
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.getElementsByTagName('input')[0];
let formBtn = document.getElementsByClassName('form-btn')[0];

formBtn.onclick = function () {
    let age = +input.value;
    console.log(age);
    if (age >= 18) {
        alert('You are over 18 years old')
    } else if ( age < 18 && age !== 0) {
        alert('You can\'t sign in');
    } else {
        alert('Please, press your age')
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике
let ul = document.getElementsByTagName('ul')[0];
let menuBtn = document.getElementsByClassName('menu-btn')[0];

menuBtn.onclick = function () {
    ul.classList.toggle('close');
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let arrComments = [
    { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
    { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
    { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
    { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
    { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }
]

for (const comment of arrComments) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    h2.innerText = comment.title;
    p.innerText = comment.body;
    btn.innerText = 'hide comment';

    document.body.appendChild(div);
    div.append(h2, p, btn)

    btn.onclick = function () {
        p.classList.toggle('close');
    }
}
