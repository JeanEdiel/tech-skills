import express, { Express } from 'express';
import { DateTime } from 'luxon';
import { routes } from './routes'

const app: Express = express();
const port: number = 3000;

//Configurações
// urlencoded- Processa dados de formulário enviados por meio de solicitações POST com codificação application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// json - Habilita comunicações de dados via JSON
app.use(express.json());


// routes
app.use(routes);



// inicia o servidor
// Boa prática: sempre ser o último comando no arquivo principal, neste exemplo no arquivo server.ts
app.listen(port, () => {
    const datahora: DateTime = DateTime.now().setZone('America/Sao_Paulo');
    console.log(`[${datahora.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}] - Servidor iniciado na porta: ${port}`);
});
