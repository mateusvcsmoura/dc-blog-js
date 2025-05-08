import { findPost } from "./findPost.js";
import { isLogged } from "./isLogged.js";
import { renderPosts } from "./renderPosts.js";

export function likePost(ev) {
    if (!isLogged()) {
        window.alert('you need to log in before liking posts');
        return;
    }

    const post = findPost(ev);

    if (!post.hasUserLiked) {
        post.like();
    }

    return renderPosts();
}

