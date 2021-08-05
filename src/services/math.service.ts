export class MathService {
  public sumOfTwoNumbers = (a: number, b: number): Record<string, number> => {
    const s: number = a + b;

    const result: { a: number; b: number; total: number } = { a, b, total: s };

    return result;
  };
}
