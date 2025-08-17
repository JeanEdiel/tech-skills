console.log('Hello Typescript');

// 1. Crie uma interface `IUser` com as seguintes propriedades: `id` (number), `name` (string), `email` (string), `isActive` (boolean).
interface IUser
{
    id: number,
    name: string,
    email: string,
    isActive: boolean
};

// 2. Crie uma interface `IProduct` com as seguintes propriedades: `id` (number), `name` (string), `price` (number), `inStock` (boolean), `categories` (array de strings).
interface IProduct
{
    id: number,
    name: string,
    price: number,
    inStock: boolean,
    categories: string[]
}

// 3. Crie um `Type Alias` chamado `UserRole` que possa ser `'admin'` ou `'user'`.
type UserRole = 'admin' | 'user';

// 4. Crie uma nova interface `IAdminUser` que estenda `IUser` e adicione uma propriedade `role` do tipo `UserRole`.
interface IAdminUser extends IUser
{
    role: UserRole
}

// 5. Crie instâncias de `IUser`, `IProduct` e `IAdminUser`, atribuindo valores.
let user: IUser = {
    id: 1,
    name: 'Jean',
    email: 'jean@teste.com',
    isActive: false
};
console.log(user);

let product: IProduct = {
    id: 1,
    name: 'Notebook',
    price: 2999.99,
    categories: ['Eletrônicos', 'Informática'],
    inStock: false
};
console.log(product);

let userAdmin: IAdminUser = {
    id: 2,
    name: 'Ediel',
    email: 'ediel@teste.com',
    isActive: true,
    role: 'admin'
}
console.log(userAdmin);

// 6. Crie uma função que receba um objeto do tipo `IUser` e imprima suas informações. Faça o mesmo para `IProduct`.
function exibirInfoUser(user: IUser): void
{
    console.log('### INFORMAÇÕES DO USUÁRIO ###');
    console.log(`Código do usuário: ${user.id}`);
    console.log(`Nome do usuário: ${user.name}`);
    console.log(`Email do usuário: ${user.email}`);
    console.log(`Usuário Ativo? ${user.isActive ? 'Sim' : 'Não'}`);
}
exibirInfoUser(user);
exibirInfoUser(userAdmin);

function exibirInfoProduct(produto: IProduct): void
{
    console.log('### INFORMAÇÕES DO PRODUTO ###');
    console.log(`Código do produto ${produto.id}`);
    console.log(`Nome do produto ${produto.name}`);
    console.log(`Valor do produto ${produto.price}`);
    console.log(`Categorias do produto ${produto.categories}`);
    console.log(`Tem em estoque? ${produto.inStock ? 'Sim' : 'Não'}`);    
}
exibirInfoProduct(product);