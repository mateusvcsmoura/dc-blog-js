import { getDate } from '../modules/getDate.js';

class Comment {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.createdAt = getDate();
    }
}

export { Comment };