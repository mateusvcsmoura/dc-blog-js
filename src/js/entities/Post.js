import { idCounter } from '../modules/idCounter.js';
import { getDate } from '../modules/getDate.js';

class Post {
    #userLiked;
    #userShared;

    constructor(author, subject, content) {
        this.author = author;
        this.subject = subject;
        this.content = content;
        this.id = idCounter();
        this.comments = [];
        this.likes = 0;
        this.shares = 0;
        this.createdAt = getDate();
        this.#userLiked = false;
        this.#userShared = false;
    }

    addComment(author, content) {
        const comment = new Comment(author, content);

        this.comments.push(comment);

        return comment;
    }

    like() {
        this.#userLiked = true;

        return this.likes++;
    }

    share() {
        this.#userShared = true;

        return this.shares++;
    }

    get hasUserLiked() {
        return this.#userLiked;
    }

    get hasUserShared() {
        return this.#userShared;
    }
}

export { Post };