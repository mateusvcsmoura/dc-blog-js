import { findPost } from "./findPost.js";

export function renderExistingComments(ev) {
    const postCard = ev.target.closest('.card');
    const post = findPost(ev);

    if (postCard.querySelector('.existing-comments')) return;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('existing-comments');

    post.comments.forEach((comment) => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        commentDiv.innerHTML = `
        <span class="comment-author">${comment.author}:</span>
        <span class="comment-content">${comment.content}</span>
        `;

        commentsContainer.appendChild(commentDiv);
    });

    postCard.appendChild(commentsContainer);
}
