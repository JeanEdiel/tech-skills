# Exercício 5: Construindo uma API REST Básica com Express e TypeScript

1. Instale o Express e os tipos para ele: `npm install express @types/express`
Crie um arquivo `src/server.ts`.
2. Configure um servidor Express básico que escute na porta 3000.
3. Crie um array de usuários (objetos do tipo `IUser` que você criou no Exercício 3) em memória.
4. Implemente as seguintes rotas:
    1. GET `/users`: Retorna todos os usuários.
    2. GET `/users/:id`: Retorna um usuário específico pelo ID.
    3. POST `/users`: Adiciona um novo usuário ao array. O corpo da requisição deve ser validado para garantir que corresponde à interface `IUser` (pode ser uma validação simples para este exercício).
    4. PUT `/users/:id`: Atualiza um usuário existente.
    5. DELETE `/users/:id`: Remove um usuário.

Certifique-se de usar a tipagem do TypeScript em todas as partes da API (parâmetros de rota, corpo da requisição, respostas, etc.).
