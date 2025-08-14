import express, { Express, Request, Response } from 'express';
import validationBr from 'validation-br';

const app: Express = express();
const port: number = 3000;


app.get('/valida-cpf/:cpf', (req: Request<{ cpf: string | number }>, res: Response) => {  
    if (validationBr.isCPF(req.params.cpf)) {
        return res.json({ valido: true, msg: 'CPF Válido!' });
    } else {
        return res.json({ valido: false, msg: 'CPF Inválido!' });
    }
});

app.get('/valida-cnpj/:cnpj', (req: Request<{ cnpj: string | number }>, res: Response) => {  
    if (validationBr.isCNPJ(req.params.cnpj)) {
        return res.json({ valido: true, msg: 'CNPJ Válido!' });
    } else {
        return res.json({ valido: false, msg: 'CNPJ Inválido!' });
    }
});

app.get('/valida-cnh/:cnh', (req: Request<{ cnh: string | number }>, res: Response) => {  
    if (validationBr.isCNH(req.params.cnh)) {
        return res.json({ valido: true, msg: 'CNH Válido!' });
    } else {
        return res.json({ valido: false, msg: 'CNH Inválido!' });
    }
});


// inicia o servidor
// Boa prática: sempre ser o último comando no arquivo principal, neste exemplo no arquivo server.ts
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
