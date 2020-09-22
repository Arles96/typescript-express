import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import keys from './config/keys';

// rutas
import exampleRoutes from './routes/exampleRoutes';

class Server {
  
  public app: express.Application

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config (): void {
    const { app } = this;
    // settings
    app.set('port', keys.PORT);
    // middlewares
    app.use(morgan(keys.MORGAN_DEV));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // app.use(helmet());
    // app.use(compression());
    // app.use(cors());
    app.use(express.static(path.join(__dirname, 'public')));
  }

  public routes (): void {
    const { app } = this;
    // rutas
    app.use('/api/example', exampleRoutes);

    app.use('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  }

  public start () : void {
    const { app } = this;
    app.listen(app.get('port'), () => {
      console.log(`Server start http:localhost:${app.get('port')}`);
    });
  }

}

export {
  Server
};
