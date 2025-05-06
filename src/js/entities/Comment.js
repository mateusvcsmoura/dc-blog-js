import { getDate } from '../modules/getDate.js';

class Comment {
    constructor(author, content) {
        this.author = author.username;
        this.content = content;
        this.createdAt = getDate();
    }
}

export { Comment };