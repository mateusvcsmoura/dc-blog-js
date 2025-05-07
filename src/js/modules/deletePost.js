import { renderPosts } from "./renderPosts.js";
import { allPosts } from "../data/posts.js";

export function deletePost(ev) {
    const postCard = ev.target.closest('.card');
    const postId = Number(postCard.dataset.id);
    const index = allPosts.findIndex((post) => post.id === postId); // Find the index of the post in array

    if (index !== -1) {
        allPosts.splice(index, 1);
    }

    return renderPosts();
}

