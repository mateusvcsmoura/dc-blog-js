import { findPost } from "./findPost.js";
import { isLogged } from "./isLogged.js";
import { renderPosts } from "./renderPosts.js";

export function commentOnPost(ev) {
    if (!isLogged()) {
        window.alert('you need to log in before commenting on posts');
    }

    const commentContent = document.querySelector('.comment-input').value;

    if (commentContent === "") return;

    const post = findPost(ev);
    const userData = JSON.parse(window.sessionStorage.getItem('userData'));
    const username = userData.username;

    post.addComment(username, commentContent);

    return renderPosts();
}