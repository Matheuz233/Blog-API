# 📝 Blog API

API RESTful para um sistema de blog simples, desenvolvida com Node.js, Express.js e Prisma (MySQL). Permite o gerenciamento de Usuários, Categorias e Postagens, com persistência de dados, validação e segurança.

## 🚀 Tecnologias Utilizadas

- 🟩 **Node.js**
- ⚡ **Express.js**
- 🟦 **Prisma ORM**
- 🐬 **MySQL**
- ✅ **Zod** (validação)
- 🔒 **Bcrypt** (hash de senha)

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Matheuz233/Blog-API.git
cd Blog-API
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

- Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário.
- Execute as migrations do Prisma:
  ```bash
  npx prisma migrate dev
  ```

4. Inicie o servidor:

```bash
npm run dev
```

## 📚 Endpoints

### 👤 Usuários

- `POST /users` — Criar usuário
- `GET /users` — Listar usuários
- `GET /users/:id` — Detalhar usuário
- `PUT /users/:id` — Atualizar usuário
- `DELETE /users/:id` — Remover usuário
- `GET /users/:id/posts` — Listar postagens de um usuário

### 🏷️ Categorias

- `POST /categories` — Criar categoria
- `GET /categories` — Listar categorias
- `PUT /categories/:id` — Atualizar categoria
- `DELETE /categories/:id` — Remover categoria

### 📝 Postagens

- `POST /posts` — Criar postagem
- `GET /posts` — Listar postagens
- `GET /posts/:id` — Detalhar postagem
- `PUT /posts/:id` — Atualizar postagem
- `DELETE /posts/:id` — Remover postagem

## ✨ Funcionalidades Extras

- 🔒 Hash de senha com bcrypt
- ✅ Validação de dados com Zod
- 🔗 Relacionamento entre usuários, categorias e postagens

---

Criado por **Matheus Augusto Silva dos Santos**
