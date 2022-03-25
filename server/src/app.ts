import cors from 'cors';
import express from 'express';


class App {

    server: express.Application

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {

    }

}

export default new App().server;