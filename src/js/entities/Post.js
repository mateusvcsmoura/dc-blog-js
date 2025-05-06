import { idCounter } from '../modules/idCounter.js';
import { getDate } from '../modules/getDate.js';

class Post {
    constructor(author, subject, content) {
        this.author = author;
        this.subject = subject;
        this.content = content;
        this.id = idCounter();
        this.comments = [];
        this.likes = 0;
        this.shares = 0;
        this.createdAt = getDate();
    }

    addComment(author, content) {
        const comment = new Comment(author, content);

        this.comments.push(comment);

        return comment;
    }
}

export { Post };