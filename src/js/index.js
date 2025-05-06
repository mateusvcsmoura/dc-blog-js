import '../styles/index.css';
import { isLogged } from './modules/isLogged.js';
import { allPosts } from './data/posts.js';
import { createPost } from './modules/createPost.js';

isLogged();
createPost("batman", "Arkham Asylum", "Arkham is needing a rein.");
createPost("superman", "Batman is going insane", "I actually don't know what is happening with him.");
createPost("wonderwoman", "I am about to leave Justice League", "I'm getting sick of Bruce and Clark. They mad.");
console.log(allPosts);