# Exercício 4: Genéricos

1. Crie uma função genérica chamada `getData<T>(items: T[]): T[]` que recebe um array de qualquer tipo e retorna o mesmo array. Demonstre seu uso com:
    1. arrays de strings
    2. arrays numbers
    3. arrays de objetos `IUser`
2. Crie uma função genérica chamada `getById<T extends { id: number }>(items: T[], id: number): T | undefined` que recebe um array de objetos que possuem uma propriedade `id` (number) e um `id` para procurar. A função deve retornar o objeto correspondente ou `undefined`. Teste com arrays de `IUser` e `IProduct`.
