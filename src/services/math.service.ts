import { SumAB } from '../interfaces/sumAB.interface';

export class MathService {
  public sumOfTwoNumbers = (a: number, b: number): SumAB => {
    const s: number = a + b;

    const result: SumAB = { a, b, total: s };

    return result;
  };
}
