import { OpenAPIV3 } from 'openapi-types';

export const mathDocs: OpenAPIV3.PathsObject = {
  '/sum-of-two': {
    get: {
      tags: ['math'],
      operationId: 'sumOfTwo',
      description: 'Adds a and b and returns the result',
      parameters: [
        {
          in: 'query',
          name: 'a',
          style: 'number',
          required: true,
        },
        {
          in: 'query',
          name: 'b',
          style: 'number',
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'Should return the sum of a and b.',
        },
      },
    },
  },
};
