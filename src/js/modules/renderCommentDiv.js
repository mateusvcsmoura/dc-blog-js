import { commentOnPost } from "./commentOnPost";

export function renderCommentDiv(ev) {
    const postCard = ev.target.closest('.card');

    if (postCard.querySelector('.comment-box')) return; // if the input is already displayed

    const commentDiv =
        `<div class="comment-box">
            <textarea class="input comment-input" placeholder="Escreva um comentário..."></textarea>
            <div class="comment-actions">
                <button class="btn cancel-comment">Cancelar</button>
                <button class="btn submit-comment">Comentar</button>
            </div>
        </div>`;

    postCard.insertAdjacentHTML('beforeend', commentDiv);

    document.querySelector('.submit-comment').addEventListener('click', (ev) => {
        return commentOnPost(ev);
    })
}
