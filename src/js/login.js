import '../styles/login.css';
import { loginHandler } from './modules/handleLogin.js';

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submitBtn');

    if (submitBtn) {
        submitBtn.addEventListener('click', loginHandler);
    } else {
        console.warn('Formulário de login não encontrado no DOM');
    }
});

