import express, { Express, Request, response, Response } from 'express';
import cep from 'cep-promise';
import validationBr from 'validation-br';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

interface IPessoa
{
    cpf: string,
    nome: string,
    rg: string,
}

interface Endereco
{
    cep: string | number,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
}

interface ICliente extends IPessoa, Endereco
{
    email: string
}

let clientes: ICliente[] = [
    { nome: 'Jean', cpf: '12345678911', rg: '123698529', email: 'teste@teste', cep: '84015630', rua: 'Lauro Marcondes Ferreira', bairro: 'Jardim Carvalho', cidade: 'Ponta Grossa', estado: 'Parana'  }
];

app.get('/clientes', (req: Request, res: Response) => {
    return res.json(clientes)
});


app.get('/clientes/:cpf', (req: Request<{ cpf: string }>, res: Response) => {
    return res.json(clientes.find(cliente => { return cliente.cpf === req.params.cpf }));
});

function validaCliente(cliente: any): cliente is ICliente
{
    return typeof cliente.cpf === 'string' &&
           typeof cliente.nome === 'string' &&
           typeof cliente.rg === 'string' &&
           (typeof cliente.cep === 'string' || typeof cliente.cep === 'number') &&
           typeof cliente.rua === 'string' &&
           typeof cliente.bairro === 'string' &&
           typeof cliente.cidade === 'string' &&
           typeof cliente.estado === 'string' &&
           typeof cliente.email === 'string'
}

app.post('/clientes', async (req: Request<ICliente>, res: Response) => {
    
    const cliente: any = req.body;

    // verificar se todos os campos para um cliente foram recebidos
    if (validaCliente(cliente)) {

        // verificar se o cpf enviado é válido
        if (validationBr.isCPF(cliente.cpf)) {

            // verificar se o cep enviado existe
            await cep(cliente.cep)
                .then((data: any) => {
                    console.log('cep encontrado', data);
                    clientes.push(cliente);
                    return res.json({ valido: true, msg: 'Cliente inserido com sucesso!' });
                })
                .catch((error: any) => {
                    console.log('cep não encontrado', error);
                    return res.json({ valido: false, msg: 'CEP Inválido ou não encontrado.' });
                });

        } else {
            return res.json({ valido: false, msg: 'CPF Inválido!' });    
        }

    } else {
        return res.json({ valido: false, msg: 'Esta faltando campos na requisição!' });
    }

});

app.delete('/clientes/:cpf', (req: Request<{ cpf: string }>, res: Response) => {
    
    const indexCliente: number = clientes.findIndex((cliente) => { return cliente.cpf === req.params.cpf });

    if (indexCliente !== -1) {
        clientes.splice(indexCliente, 1);
        return res.json({ msg: 'Cliente excluído!'});
    } else {
        return res.json({ msg: 'Cliente não encontrado!'});
    }   
});


// inicia o servidor
// Boa prática: sempre ser o último comando no arquivo principal, neste exemplo no arquivo server.ts
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
