# DC Blog 🦇

Um blog minimalista, mobile-first e funcional, desenvolvido com foco em aprendizado de JavaScript moderno, POO e ferramentas do ecossistema web como Webpack e Babel.

## ✨ Funcionalidades

- ✅ **Criação de posts** com título e conteúdo.
- ✅ **Remoção de posts** individualmente.
- ✅ **Curtir** e **compartilhar** posts com controle local (1 interação por usuário).
- ✅ **Adicionar comentários** aos posts.
- ✅ **Cancelar comentários** com botão específico.
- ✅ **Visualização dos comentários existentes** logo abaixo do post.
- ✅ **Autenticação simples** por meio de login com `sessionStorage`.
- ✅ Atualização em tempo real no DOM usando JavaScript puro.

## 🛠️ Tecnologias e ferramentas

- **HTML5, CSS3 e JavaScript ES6+**
- **POO (Programação Orientada a Objetos)** — Classes `Post`, `Comment`, `User`, etc.
- **Webpack** — Empacotamento de módulos e recursos.
- **Babel.js** — Transpiler de ES6+ para compatibilidade com navegadores mais antigos.
- **Modularização ES Modules** — Separação clara de responsabilidades (`render`, `event handlers`, `utils`, etc).

## 📱 Design Responsivo

O layout do DC Blog foi projetado seguindo a abordagem **mobile-first**, garantindo uma boa experiência principalmente em smartphones. Componentes como cards, botões e campos de texto foram otimizados para toque e leitura em telas menores.

## 🧠 Estrutura de Código

A aplicação é dividida em três principais camadas:

### 📁 `data/`
- `posts.js` – Armazena os dados dos posts em tempo de execução (memória).

### 📁 `entities/`
- `Post.js` – Classe que representa um post com métodos como `like()`, `comment()` e `share()`.
- `Comment.js` – Classe que representa um comentário com autor e conteúdo.
- `User.js` – Classe que representa o usuário logado.

### 📁 `modules/`
Módulos responsáveis pela lógica de interface e manipulação de dados:
- `commentOnPost.js` – Adiciona comentários a um post.
- `createPost.js` – Cria novos objetos `Post` e os renderiza no DOM.
- `deletePost.js` – Remove posts do DOM e da memória.
- `findPost.js` – Localiza um post no array de dados com base no DOM.
- `getDate.js` – Gera a data formatada de criação de posts.
- `handleLogin.js` – Gerencia login e persistência com `sessionStorage`.
- `idCounter.js` – Gera identificadores únicos para posts e comentários.
- `isLogged.js` – Verifica se o usuário está logado.
- `likePost.js` – Adiciona likes ao post.
- `renderCommentDiv.js` – Exibe a área de comentários abaixo do post.
- `renderComments.js` – Renderiza comentários ao interagir com a postagem.
- `renderExistingComments.js` – Exibe comentários já existentes.
- `renderPosts.js` – Exibe os posts no layout.
- `sharePost.js` – Simula o compartilhamento de um post.

### Arquivos principais:
- `index.js` – Ponto de entrada da aplicação, gerencia a tela principal.
- `login.js` – Tela de login e validação de acesso.


## 🔐 Sessão do Usuário

- Usuário faz login com nome de usuário, e-mail e senha.
- Informações são salvas no `sessionStorage`.
- Sessão é mantida enquanto o navegador estiver aberto.

---

> Projeto criado com fins educacionais para prática de JavaScript moderno e arquitetura de aplicações web.  
Desenvolvido por [Mateus Moura](https://github.com/mateusvcsmoura).

