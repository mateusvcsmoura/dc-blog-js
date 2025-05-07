import { findPost } from "./findPost.js";
import { renderPosts } from "./renderPosts.js";

export function sharePost(ev) {
    const post = findPost(ev);

    if (!post.hasUserShared) {
        post.share();
    }

    return renderPosts();
}

