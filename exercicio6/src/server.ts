import express, { Request, Response } from 'express'
import validationBr from 'validation-br';
import cep from 'cep-promise';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/valida-cpf/:cpf', (req: Request<{ cpf: string | number }>, res: Response) => {
   return res.json({ valido: validationBr.isCPF(req.params.cpf) });
});


// promise
app.get('/valida-cep/:cep', async (req: Request<{ cep: string | number }>, res: Response) => {
    const dados: any = await cep(req.params.cep)
                            .then((data) => { return data })
                            .catch((err) => { return err });
    return res.json({ dados:  dados })
});

interface IEndereco
{
    cep: string | number
}

interface IPessoa
{
    cpf: string,
    nome: string,
    idade: number
}

interface ICliente extends IPessoa, IEndereco
{
    email: string
}

let clientes: ICliente[] = [];

function validaCliente(cliente: any): cliente is ICliente
{
    return typeof cliente.cpf === 'string' &&
           typeof cliente.nome === 'string' &&
           typeof cliente.idade === 'number'
}

app.post('/clientes', async (req: Request<ICliente>, res: Response) => {

    console.log(validaCliente(req.body));

    return res.json({ dados: 'ok' })
});


app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});
