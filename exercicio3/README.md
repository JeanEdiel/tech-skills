# Exercício 3 - Interfaces e Tipos Personalizados

1. Crie uma interface `IUser` com as seguintes propriedades: `id` (number), `name` (string), `email` (string), `isActive` (boolean).
2. Crie uma interface `IProduct` com as seguintes propriedades: `id` (number), `name` (string), `price` (number), `inStock` (boolean), `categories` (array de strings).
3. Crie um `Type Alias` chamado `UserRole` que possa ser `'admin'` ou `'user'`.
4. Crie uma nova interface `IAdminUser` que estenda `IUser` e adicione uma propriedade `role` do tipo `UserRole`.
5. Crie instâncias de `IUser`, `IProduct` e `IAdminUser`, atribuindo valores.
6. Crie uma função que receba um objeto do tipo `IUser` e imprima suas informações. Faça o mesmo para `IProduct`.
