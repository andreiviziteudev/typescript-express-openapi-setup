import { OpenAPIV3 } from 'openapi-types';

export const helloWorldDocs: OpenAPIV3.PathsObject = {
  '/hello-world': {
    get: {
      tags: ['helloworld'],
      operationId: 'helloWorld',
      description: '',
      responses: {
        default: {
          description: "Should return 'Hello World!' string",
        },
      },
    },
  },
};
