import { mockRequest, mockResponse } from '../unit-test-helpers/express-mocks.helper';
import { MathController } from '../../controllers/math.controller';
import { Logger } from '../../helpers/Logger.helper';
import { SumAB } from '../../interfaces/sumAB.interface';

// Logger off for unit tests
Logger.info = () => {};
Logger.error = () => {};

const sumOfTwoExample: SumAB = { a: 1, b: 2, total: 3 };

const mathServiceMock: jest.Mock = jest.fn();
jest.mock('../../services/math.service', () => ({
  MathService: jest.fn().mockImplementation(() => ({
    sumOfTwoNumbers: mathServiceMock,
  })),
}));

describe('Math Controller', () => {
  const mathController: MathController = new MathController();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('sumOfTwo', () => {
    it('should return status 500', () => {
      mathServiceMock.mockImplementationOnce(() => {
        throw new Error('Internal Server Error');
      });

      mockRequest.query.a = sumOfTwoExample.a.toString();
      mockRequest.query.b = sumOfTwoExample.b.toString();

      mathController.sumOfTwo(mockRequest, mockResponse);

      expect(mockResponse.status).toBeCalledWith(500);
    });

    it('should return status 200 and the result of a + b', () => {
      mathServiceMock.mockReturnValue(sumOfTwoExample);

      mockRequest.query.a = sumOfTwoExample.a.toString();
      mockRequest.query.b = sumOfTwoExample.b.toString();

      mathController.sumOfTwo(mockRequest, mockResponse);

      expect(mockResponse.status).toBeCalledWith(200);
      expect(mockResponse.statusMessage).toMatchObject(sumOfTwoExample);
    });
  });
});
