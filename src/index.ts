import express, { Express } from 'express';
import routes from './routes';
import cors from 'cors';

import './database/connection';

class Index {
  private server: Express;
  private port = process.env.PORT || 3333;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.server.listen(this.port, this.started);
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use('/api/v1/', routes);
  }

  started() {
      console.log('🔥 Server Started');
  }
}

export default new Index();
