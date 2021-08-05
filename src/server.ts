import express from 'express';
import { initialize } from 'express-openapi';
import swaggerUI from 'swagger-ui-express';
import { urlencoded as urlencodedMiddleware, json as jsonMiddleware } from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { apiDoc } from './docs';
import { operations } from './controllers';
import { serverConfig } from './configs/server.config';

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();

    // Apply parser middlewares
    this.app.use(urlencodedMiddleware({ extended: true }));
    this.app.use(jsonMiddleware());

    // Apply security middlewares
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());

    // Init the app from the openapi docs
    initialize({
      apiDoc: apiDoc,
      app: this.app,
      operations,
    });

    this.app.get('/', (req: any, res: any) => {
      res.status(200).send(new Date());
    });

    // Apply the swagger middleware
    this.app.use(
      `${serverConfig.API_BASE_PATH}/docs`,
      swaggerUI.serve,
      swaggerUI.setup(undefined, {
        swaggerUrl: `${serverConfig.API_BASE_PATH}/api-docs`,
      }),
    );
  }

  public start = (): void => {
    this.app.listen(serverConfig.PORT, () => {
      console.log('Server started successfully on port ' + serverConfig.PORT);
    });
  };
}
