import { Request, Response } from 'express';

class UserController
{
    async getUsers(req: Request, res: Response): Promise<Response>
    {
        try {
            
            return res.send('Todos os usuários');
        } catch (error: any) {
            return res.send('Ocorreu um erro ao buscar os usuários');
        }
    }
}

export { UserController };