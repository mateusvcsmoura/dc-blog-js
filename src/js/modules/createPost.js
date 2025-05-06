import { Post } from "../entities/Post.js";
import { allPosts } from "../data/posts.js";

export function createPost(author, subject, content) {
    if (author !== "" && subject !== "" && content !== "") {
        const newPost = new Post(author, subject, content);

        allPosts.push(newPost);

        return newPost;
    } else {
        return window.alert("fill all fields before posting");
    }
}