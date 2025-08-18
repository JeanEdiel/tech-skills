
import express, { Request, Response, Router } from 'express';
import userRoutes from './routes/userRoutes';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response): Response => {
    return res.send('Exemplo de Estrutura de Projeto Typescript - MVCS');
});

routes.use(userRoutes);


export { routes };