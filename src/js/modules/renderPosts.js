import { allPosts } from '../data/posts.js';

export function renderPosts() {
    const postsContainer = document.querySelector('.posts');

    allPosts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.classList.add("card");

        postCard.innerHTML = `                    
        <div class="card-header">
            <span class="username">${post.author}</span>
            <span class="date">${post.createdAt}</span>
        </div>
        <h2 class="post-title">${post.subject}</h2>
        <p class="post-content">${post.content}</p>
        <div class="card-footer">
            <i class="far fa-heart"></i><span>${post.likes}</span>
            <i class="far fa-comment"></i><span>${post.comments.length}</span>
            <i class="fas fa-share"></i><span>${post.shares}</span>
        </div>`;

        postsContainer.appendChild(postCard);
    });
}
