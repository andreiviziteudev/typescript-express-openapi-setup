import { Request, Response } from 'express';
import { SumAB } from '../interfaces/sumAB.interface';
import { Logger } from '../helpers/Logger.helper';
import { MathService } from '../services/math.service';

export class MathController {
  private mathService = new MathService();

  public sumOfTwo = (req: Request, res: Response) => {
    try {
      const a: number = parseInt(req.query.a as string, 10);
      const b: number = parseInt(req.query.b as string, 10);

      const result: SumAB = this.mathService.sumOfTwoNumbers(a, b);
      return res.status(200).send(result);
    } catch (err: Error | any) {
      Logger.error(err);
      return res.status(500).send('Internal Server Error');
    }
  };
}
