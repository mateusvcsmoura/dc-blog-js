import { findPost } from "./findPost.js";
import { isLogged } from "./isLogged.js";
import { renderPosts } from "./renderPosts.js";

export function sharePost(ev) {
    if (!isLogged()) {
        window.alert('you need to log in before liking posts');
        return;
    }

    const post = findPost(ev);

    if (!post.hasUserShared) {
        post.share();
    }

    return renderPosts();
}

