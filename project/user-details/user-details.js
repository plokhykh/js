// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let currentUser = sessionStorage.getItem('user');
currentUser = JSON.parse(currentUser);
setUserProperties(currentUser);

function setUserProperties(user) {
    let wrapper = document.createElement('div');
    let text = document.createElement('div');
    let h4 = document.createElement('h4');
    let name = document.createElement('p');
    let email = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let company = document.createElement('p');
    let list = document.createElement('ul');
    let btn = document.createElement('button');

    wrapper.classList.add('cards-list')
    text.classList.add('card-details');
    btn.classList.add('btn-posts');

    h4.innerText = user.username;
    name.innerText = `name: ${user.name}`;
    email.innerText = `email: ${user.email}`;
    address.innerText = `address: ${user.address.street}, ${user.address.suite}\n ${user.address.city}, ${user.address.zipcode}
    geo: lat - ${user.address.geo.lat}, lng - ${user.address.geo.lng}`
    phone.innerText = `phone: ${user.phone}`;
    website.innerText = `website: ${user.website}`;
    btn.innerText = 'posts of current user';

    company.innerText = 'company:'
    for (const element in user.company) {
        let li = document.createElement('li');
        li.innerText = `${element}: ${user.company[element]}`
        list.appendChild(li)
    }

    document.body.appendChild(wrapper);
    wrapper.append(text, btn);
    text.append(h4, name, email, address, phone, website, company);
    company.appendChild(list);
}


let postBtn = document.getElementsByTagName('button')[0];

postBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.id}/posts`)
        .then(result => result.json())
        .then(posts => {
            let postsDiv = document.createElement('div');
            postsDiv.classList.add('posts-box');
            for (const post of posts) {
                let div = document.createElement('div');
                let a = document.createElement('a');
                let h3 = document.createElement('h3');

                a.href = '../post-details/post-details.html';
                h3.innerText = post.title

                postsDiv.appendChild(div);
                div.appendChild(a);
                a.appendChild(h3);
                sessionStorage.setItem('post', JSON.stringify(post));
            }

            document.body.appendChild(postsDiv)
        })
}


