import { mockRequest, mockResponse } from '../unit-test-helpers/express-mocks.helper';
import { HelloWorldController } from '../../controllers/hello-world.controller';

describe('Hello World Controller', () => {
  const helloWorldController: HelloWorldController = new HelloWorldController();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('helloWorld', () => {
    it("should return status 200 and the string 'Hello World!", () => {
      helloWorldController.helloWorld(mockRequest, mockResponse);

      expect(mockResponse.status).toBeCalledWith(200);
      expect(mockResponse.statusMessage).toEqual('Hello World!');
    });
  });
});
