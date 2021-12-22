// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let btn = document.createElement('button');

            div.classList.add('card');
            btn.classList.add('primary')

            h3.innerText = `${user.id} - ${user.name}`;
            btn.innerText = 'details';

            document.getElementsByClassName('wrapper')[0].appendChild(div);
            div.append(h3, btn);

            btn.onclick =()=>{
                sessionStorage.setItem('user', JSON.stringify(user));
                location.href = '../user-details/user-details.html'
            }
        }
    })

