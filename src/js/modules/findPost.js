import { allPosts } from "../data/posts.js";

export function findPost(ev) {
    const postCard = ev.target.closest('.card');
    const postId = Number(postCard.dataset.id);

    return allPosts.find((post) => post.id === postId);
}