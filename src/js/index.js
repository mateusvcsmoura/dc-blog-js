import '../styles/index.css';
import { isLogged } from './modules/isLogged.js';
import { createPost } from './modules/createPost.js';
import { renderPosts } from './modules/renderPosts.js';
import { likePost } from './modules/likePost.js';
import { sharePost } from './modules/sharePost.js';
import { deletePost } from './modules/deletePost.js';
import { renderCommentDiv } from './modules/renderCommentDiv.js';

const submitBtn = document.getElementById("submitBtn");

isLogged();
createPost("batman", "Arkham Asylum", "Arkham is needing a rein.");
createPost("wonderwoman", "I am about to leave Justice League", "I'm getting sick of Bruce and Clark. They mad.");
createPost("mats", "I am currently watching Gotham", "It's great to see how the city was before Batman Begins, Jim Gordon had a difficult life there.");

renderPosts();

submitBtn.addEventListener("click", () => {

    if (isLogged()) {
        const title = document.getElementById("post-title").value.trim();
        const content = document.getElementById("post-content").value.trim();
        const userData = JSON.parse(window.sessionStorage.getItem('userData'));

        const author = userData.username;

        createPost(author, title, content);

        document.querySelector(".popup-form").classList.add('hidden');

        document.getElementById("post-title").value = "";
        document.getElementById("post-content").value = "";

        return renderPosts();
    } else {
        document.querySelector(".popup-form").classList.add('hidden');

        document.getElementById("post-title").value = "";
        document.getElementById("post-content").value = "";

        return window.alert("you need to log in before posting");
    }
});

document.querySelector('.posts').addEventListener('click', function (ev) {
    if (ev.target.classList.contains('fa-heart')) {
        likePost(ev);
    } else if (ev.target.classList.contains('fa-share')) {
        sharePost(ev);
    } else if (ev.target.classList.contains('fa-trash')) {
        deletePost(ev);
    } else if (ev.target.classList.contains('fa-comment')) {
        renderCommentDiv(ev);
    }
});
