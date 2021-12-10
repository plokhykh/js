// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let divPOST = document.createElement('div');
            let h3Post = document.createElement('h3');
            let bodyPost = document.createElement('p');
            let btn = document.createElement('button');
            h3Post.innerText = post.title;
            bodyPost.innerText = post.body;
            btn.innerText = 'get comments';

            document.body.appendChild(divPOST);
            divPOST.append(h3Post, bodyPost, btn)

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
                            div.classList.add('comment');
                            h5.innerText = comment.name;
                            p.innerText = comment.body;
                            figure.innerText = comment.email;
                            p.style.fontSize = '10px';

                            divPOST.appendChild(div);
                            div.append(h5, p, figure)
                        }
                    })
            }
        }
    })
