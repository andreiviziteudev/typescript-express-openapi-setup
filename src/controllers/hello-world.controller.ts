import { Request, Response } from 'express';

export class HelloWorldController {
  public helloWorld = (req: Request, res: Response): void => {
    res.status(200).send('Hello World!');
  };
}
