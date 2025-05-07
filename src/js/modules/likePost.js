import { findPost } from "./findPost.js";
import { renderPosts } from "./renderPosts.js";

export function likePost(ev) {
    const post = findPost(ev);

    if (!post.hasUserLiked) {
        post.like();
    }

    return renderPosts();
}

