console.log('Hello Typescript');

interface IUser
{
    id: number,
    name: string,
    email: string,
    isActive: boolean
};

interface IProduct
{
    id: number,
    name: string,
    price: number,
    inStock: boolean,
    categories: string[]
}


// 1. Crie uma função genérica chamada `getData<T>(items: T[]): T[]` que recebe um array de qualquer tipo e retorna o mesmo array.
function getData<T>(items: T[]): T[]
{
    return items;
}

//     1. arrays de strings
let categorias: string[] = ['Eletrônicos', 'Alimentos', 'Roupas'];
console.log(getData<string>(categorias));

//     2. arrays numbers
let numeros: number[] = [1, 2, 3, 4, 5];
console.log(getData<number>(numeros));

//     3. arrays de objetos `IUser`
let users: IUser[] = [
    { id: 1, name: 'Jean', email: 'jean@teste.com', isActive: false },
    { id: 2, name: 'Ediel', email: 'ediel@teste.com', isActive: true },
];
console.log(getData<IUser>(users));

// 2. Crie uma função genérica chamada `getById<T extends { id: number }>(items: T[], id: number): T | undefined` que recebe um array de objetos que possuem uma propriedade `id` (number) e um `id` para procurar.
// A função deve retornar o objeto correspondente ou `undefined`.
// Teste com arrays de `IUser` e `IProduct`.
function getById<T extends { id: number }>(items: T[], id: number): T | undefined
{
    return items.find(item => item.id === id);
}
console.log(getById<IUser>(users, 1));
console.log(getById<IUser>(users, 3));

let produtos: IProduct[] = [
    { id: 1, name: 'Notebook', price: 2999.99, categories: ['Eletrônicos', 'Infomática'], inStock: true },
    { id: 2, name: 'Camiseta', price: 99.99, categories: ['Roupas'], inStock: false },
];

console.log(getById<IProduct>(produtos, 2));
console.log(getById<IProduct>(produtos, 5));
