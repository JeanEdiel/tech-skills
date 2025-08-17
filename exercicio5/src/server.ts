import express, { Express, Request, Response } from 'express';


// 2. Configure um servidor Express básico que escute na porta 3000.
const app: Express = express();
const port: number = 3000;


// Configuração para receber dados via JSON
app.use(express.json());

// 3. Crie um array de usuários (objetos do tipo `IUser` que você criou no Exercício 3) em memória.
interface IUser
{
    id: number,
    name: string,
    email: string,
    isActive: boolean
};
let users: IUser[] = [
    { id: 1, name: 'Jean', email: 'jean@teste.com', isActive: false },
    { id: 2, name: 'Ediel', email: 'ediel@teste.com', isActive: true },
];

// 4. Implemente as seguintes rotas:
//     1. GET `/users`: Retorna todos os usuários.
app.get('/users', (req: Request, res: Response): Response => {
    return res.json(users);
});

function getById<T extends { id: number }>(items: T[], id: number): T | undefined
{
    return items.find(item => item.id === id);
}

//     2. GET `/users/:id`: Retorna um usuário específico pelo ID.
app.get('/users/:id', (req: Request<{ id: number }>, res: Response): Response => {
    const { id } = req.params;
    
    const user: IUser | undefined = getById<IUser>(users, Number(id));

    if (user) {
        return res.json(user);
    }

    return res.send('Usuário não encontrado!');
});

//     3. POST `/users`: Adiciona um novo usuário ao array.
//        O corpo da requisição deve ser validado para garantir que corresponde à interface `IUser` (pode ser uma validação simples para este exercício).
function validaUsuario(user: any): user is IUser
{
    return typeof user.id === 'number' &&
           typeof user.name === 'string' &&
           typeof user.email === 'string' &&
           typeof user.isActive === 'boolean'
}

app.post('/users', (req: Request, res:Response): Response => {
    const dados: any = req.body;
    if (validaUsuario(dados)) {
        users.push(dados);
        return res.send('Usuário cadastrado com sucesso!');
    }

    return res.send('Não foi possível adicionar usuário!');
})

//     4. PUT `/users/:id`: Atualiza um usuário existente.
app.put('/users/:id', (req: Request<{ id: number }>, res: Response): Response => {
    const { id } = req.params;
    const dados = req.body;

    if (!validaUsuario(dados)) {
        return res.send('Dados inválidos para atualização!');
    }

    const indexUser: number = users.findIndex(user => user.id === Number(id));

    if (indexUser !== -1) {
        users[indexUser] = dados;
        return res.send('Usuário atualizado!');
    }

    return res.send('Usuário não encontrado!');
});

//     5. DELETE `/users/:id`: Remove um usuário.
app.delete('/users/:id', (req: Request<{ id: number }>, res: Response): Response => {
    const { id } = req.params;

    const indexUser: number = users.findIndex(user => user.id === Number(id));

    if (indexUser !== -1) {
        users.splice(indexUser, 1);
        return res.send('Usuário excluído!');
    }

    return res.send('Usuário não encontrado!');
});


app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
});
