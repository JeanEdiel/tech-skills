import express, { Express } from 'express';


// 2. Configure um servidor Express básico que escute na porta 3000.
const app: Express = express();
const port: number = 3000;

// 3. Crie um array de usuários (objetos do tipo `IUser` que você criou no Exercício 3) em memória.
interface IUser
{
    id: number,
    name: string,
    email: string,
    isActive: boolean
};
let usuarios: IUser[] = [
    { id: 1, name: 'Jean', email: 'jean@teste.com', isActive: false },
    { id: 2, name: 'Ediel', email: 'ediel@teste.com', isActive: true },
];

app.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
});
