import userService from '../services/userService';
import { Request, Response } from 'express';

class UserController {
    async createUser(req: Request, res: Response): Promise<any> {
        try {
            const id = await userService.createPerson(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error('Something when wrong!');
        }
    }
}

export default new UserController();