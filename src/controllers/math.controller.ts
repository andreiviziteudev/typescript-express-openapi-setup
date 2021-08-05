import { Request, Response } from 'express';
import { MathService } from '../services/math.service';

export class MathController {
  private mathService = new MathService();

  public sumOfTwo = (req: Request, res: Response): void => {
    const a: number = parseInt(req.query.a as string, 10);
    const b: number = parseInt(req.query.b as string, 10);

    const result: Record<string, number> = this.mathService.sumOfTwoNumbers(a, b);
    res.status(200).send(result);
  };
}
