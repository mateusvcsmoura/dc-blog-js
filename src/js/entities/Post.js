import { idCounter } from '../modules/idCounter.js';

class Post {
    constructor(author, subject, content) {
        this.author = { username: author.username, email: author.email };
        this.subject = subject;
        this.content = content;
        this.id = idCounter();
        this.comments = [];
        this.likes = 0;
        this.shares = 0;
        this.createdAt = new Date();
    }

    addComment(author, content) {
        const comment = new Comment(author, content);

        this.comments.push(comment);

        return comment;
    }
}

export { Post };