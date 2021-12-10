// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let wrapper = document.getElementsByClassName('wrapper')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            div.classList.add('post');
            h2.innerText = post.title;
            p.innerText = post.body;

            wrapper.appendChild(div);
            div.append(h2,p)
        }
    })


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let figure = document.createElement('figure');
            div.classList.add('comment');
            h2.innerText = comment.name;
            p.innerText = comment.body;
            figure.innerText = comment.email;

            document.body.appendChild(div);
            div.append(h2,p,figure)
        }
    })
