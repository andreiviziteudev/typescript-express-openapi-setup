import * as dotenv from 'dotenv';
dotenv.config();

export const serverConfig: Record<string, string | number> = {
  API_BASE_PATH: process.env.API_BASE_PATH || '/api',
  PORT: parseInt(process.env.API_PORT as string, 10) || 3000,
};
