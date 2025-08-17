# Exercício 8: Utilizando tudo que vimos até o momento

### Crie as seguintes interfaces
1. Crie uma interface chamada `IPessoa`
    1. CPF
    2. Nome
    3. RG
    
2. Crie uma interface chamada `IEndereco`
    1. CEP
    2. Rua
    3. Bairro
    4. Cidade
    5. Estado

3. Crie uma interface `ICliente` que estenda as interfaces `IPessoa` e `IEndereco` e adicione a propriedade e-mail

4. Crie uma array de clientes

### Implemente as seguintes rotas:

1. GET `/clientes` para consultar todos os clientes
2. GET `/clientes/:cpf` para consultar um cliente através do CPF
3. POST `/clientes` para cadastrar um novo cliente
    1. Ao cadastrar um novo cliente validar se foi enviado todas as propriedades na requisição POST
    2. Ao cadastrar um novo cliente, validar o CPF, se for um CPF válido permite cadastrar se for inválido não permitir
4. PUT `/clientes/:cpf` para atualizar um cliente
5. DELETE `/clientes/:id` para excluir um cliente

### Extra - zod
Utilize o pacote de validação zod para validar a requisição das rotas.
```bash
$ npm install zod
```

zod - https://zod.dev/
