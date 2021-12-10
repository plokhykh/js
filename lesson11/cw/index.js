// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
    { id: 5, name: 'max', age: 30, status: true },
    { id: 6, name: 'anya', age: 31, status: false },
    { id: 7, name: 'oleg', age: 28, status: false },
    { id: 8, name: 'andrey', age: 29, status: true },
    { id: 9, name: 'masha', age: 30, status: true },
    { id: 10, name: 'olya', age: 31, status: false },
    { id: 11, name: 'max', age: 31, status: true }
];


for (const user of users) {
    let div = document.createElement('div');
    let button = document.createElement('button');
    div.innerText = `name: ${user.name}\n age: ${user.age}\n status: ${user.status}\n`;
    div.id = user.id;
    button.innerText = 'add to favorites'
    document.getElementsByClassName('users')[0].appendChild(div);
    div.appendChild(button);

    button.onclick = function (e) {
        let currentUser = users.find(item => item.id === user.id);
        let favorites = localStorage.getItem('favorites') || [];

        if(favorites.length){
            favorites = JSON.parse(favorites);
        }
        favorites.push(currentUser);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

