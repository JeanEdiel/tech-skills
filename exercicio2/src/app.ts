console.log('Hello Typescript');

// 1. Uma string para nome de produto
const nomeProduto: string = 'Notebook';
console.log(typeof nomeProduto, nomeProduto);

// 2. Um number para o preco do produto
const precoProduto: number = 2999.99;
console.log(typeof precoProduto, precoProduto);

// 3. Um boolean indicando se tem produto em estoque
const estoqueProduto: boolean = true;
console.log(typeof estoqueProduto, estoqueProduto);

// 4. Um array de strings para categorias do produto
const categoriasProduto: string[] = ['Eletrônicos', 'Alimentos', 'Roupas'];
console.log(typeof categoriasProduto, Array.isArray(categoriasProduto), categoriasProduto);

// 5. Uma tupla para representar as coordenadas (latitude e longitude) de um local.
// Lembrando que tupla é um array com tamanho fixo e tipos predefinidos para cada posição.
const coordenadas: [number, number] = [20, 30];
console.log(typeof coordenadas, Array.isArray(coordenadas), coordenadas);

// 6. Um Enum para os status de um pedido (Pendente, Processando, Entregue, Cancelado)
enum StatusPedido
{
    Pendente,
    Processando,
    Entregue,
    Cancelado
};

let status: StatusPedido = StatusPedido.Pendente;
console.log(typeof status, status);

// 6. Extra, pode ser atribuindo valores/descrições aos enums
enum StatusPedidoDescricao
{
    Pendente = 'Pendente',
    Processando = 'Processando',
    Entregue = 'Entregue',
    Cancelado = 'Cancelado'
};

let descricaStatus: StatusPedidoDescricao = StatusPedidoDescricao.Pendente;
console.log(typeof descricaStatus, descricaStatus);

