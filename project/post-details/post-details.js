// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let currentPost = sessionStorage.getItem('post');
currentPost = JSON.parse(currentPost);
setPostProperties(currentPost);

function setPostProperties(post) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button')

    div.classList.add('post-details')

    h4.innerText = post.title;
    p.innerText = post.body;
    btn.innerText = 'comments'

    document.body.appendChild(div);
    div.append(h4, p, btn)
}


let commentsBtn = document.getElementsByTagName('button')[0];

commentsBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`)
        .then(result => result.json())
        .then(comments => {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('box-comment');
            for (const comment of comments) {
                let div = document.createElement('div');
                let h4= document.createElement('h4');
                let p = document.createElement('p');
                let email = document.createElement('p');

                div.classList.add('comment-details');
                h4.classList.add('comment-title');
                p.classList.add('comment-body');
                email.classList.add('email');


                h4.innerText = comment.name;
                p.innerText = comment.body;
                email.innerText = comment.email;

                commentDiv.appendChild(div);
                div.append(h4, p, email);
            }
            document.body.appendChild(commentDiv);
        })
}
