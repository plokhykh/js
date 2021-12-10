// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let divUser = document.createElement('div');
            let h3User = document.createElement('h3');
            let pUser = document.createElement('p');
            let btnUser = document.createElement('button');
            h3User.innerText = user.name;
            pUser.innerText = `username: ${user.username}\n email: ${user.email}`;
            btnUser.innerText = 'posts'
            document.body.appendChild(divUser);
            divUser.append(h3User, pUser, btnUser);

            btnUser.onclick = function () {

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        posts = posts.filter(item => item.userId === user.id)
                        console.log(posts);
                        for (const post of posts) {
                            let divPost = document.createElement('div');
                            let h3Post = document.createElement('h3');
                            let bodyPost = document.createElement('p');
                            let btn = document.createElement('button');
                            divPost.style.background = 'coral';
                            h3Post.innerText = post.title;
                            bodyPost.innerText = post.body;
                            btn.innerText = 'comments';

                            divUser.appendChild(divPost);
                            divPost.append(h3Post, bodyPost, btn)

                            btn.onclick = function () {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(response => response.json())
                                    .then(comments => {
                                        comments = comments.filter(item => item.postId === post.id);
                                        for (const comment of comments) {
                                            let div = document.createElement('div');
                                            let h5 = document.createElement('h5');
                                            let p = document.createElement('p');
                                            let figure = document.createElement('figure');
                                            div.style.background = 'bisque';
                                            h5.innerText = comment.name;
                                            p.innerText = comment.body;
                                            figure.innerText = comment.email;
                                            p.style.fontSize = '10px';

                                            divPost.appendChild(div);
                                            div.append(h5, p, figure)
                                        }
                                    })
                            }
                        }
                    })
            }
        }
    })




