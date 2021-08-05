import { SumAB } from '../../interfaces/sumAB.interface';
import { MathService } from '../../services/math.service';

describe('Math Service', () => {
  const mathService: MathService = new MathService();

  describe('sumOfTwoNumbers', () => {
    it('should return the result of a + b', () => {
      const sumAB: SumAB = mathService.sumOfTwoNumbers(1, 2);

      expect(sumAB).toMatchObject({ a: 1, b: 2, total: 3 });
    });
  });
});
