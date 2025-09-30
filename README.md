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

Abaixo estão listados todos os endpoints disponíveis na API, organizados por recurso. Cada endpoint inclui o método HTTP, a rota e exemplos de requisição e validação dos dados esperados.

## 👤 Usuários

* **`POST /users` — Criar usuário**
  **Body:**

  ```json
  {
    "name": "Matheus",
    "email": "teste@email.com",
    "password": "123456"
  }
  ```

  **Validações:**

  * `name`: string não vazia.
  * `email`: e-mail válido e não vazio.
  * `password`: string não vazia.

* **`GET /users` — Listar todos os usuários**

* **`GET /users/:id` — Obter usuário específico**

* **`PUT /users/:id` — Atualizar usuário**
  **Body:** (todas as chaves opcionais)

  ```json
  {
    "name": "Novo Nome",
    "email": "novo@email.com",
    "password": "novaSenha"
  }
  ```

  **Validações:**

  * `name`: string (opcional)
  * `email`: e-mail válido (opcional)
  * `password`: string (opcional)

* **`DELETE /users/:id` — Deletar usuário**

* **`GET /users/:id/posts` — Listar postagens de um usuário**

---

## 🏷️ Categorias

* **`POST /categories` — Criar categoria**
  **Body:**

  ```json
  {
    "name": "Tecnologia"
  }
  ```

  **Validação:** `name` deve ser string não vazia.

* **`GET /categories` — Listar todas as categorias**

* **`PUT /categories/:id` — Atualizar categoria**
  **Body:**

  ```json
  {
    "name": "Novo Nome da Categoria"
  }
  ```

  **Validação:** `name` deve ser string não vazia.

* **`DELETE /categories/:id` — Deletar categoria**

---

## 📝 Postagens

* **`POST /posts` — Criar postagem**
  **Body:**

  ```json
  {
    "title": "Meu Primeiro Post",
    "content": "Este é o conteúdo do meu primeiro post",
    "userId": 1,
    "categoryId": 1
  }
  ```

  **Validações:**

  * `title`: string não vazia
  * `content`: string não vazia, até 255 caracteres
  * `userId`: número válido
  * `categoryId`: número válido

* **`GET /posts` — Listar todas as postagens**

* **`GET /posts/:id` — Obter postagem específica**

* **`PUT /posts/:id` — Atualizar postagem**
  **Body:** (todas as chaves opcionais)

  ```json
  {
    "title": "Meu Primeiro Post Atualizado",
    "content": "Este é o conteúdo atualizado",
    "categoryId": 1
  }
  ```

  **Validações:**

  * `title`: string não vazia (opcional)
  * `content`: string não vazia, até 255 caracteres (opcional)
  * `categoryId`: número válido (opcional)

* **`DELETE /posts/:id` — Deletar postagem**

## ✨ Funcionalidades Extras

- 🔒 Hash de senha com bcrypt
- ✅ Validação de dados com Zod
- 🔗 Relacionamento entre usuários, categorias e postagens

---

Criado por **Matheus Augusto Silva dos Santos**
