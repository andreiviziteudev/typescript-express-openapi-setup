import { OpenAPIV3 } from 'openapi-types';
import { serverConfig } from '../configs/server.config';
import { helloWorldDocs } from './hello-world.docs';
import { mathDocs } from './math.docs';

export const apiDoc: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'HITL Profiler app API.',
    version: '1.0.0',
  },
  servers: [{ url: serverConfig.API_BASE_PATH as string }],
  paths: {
    ...helloWorldDocs,
    ...mathDocs,
  },
};
