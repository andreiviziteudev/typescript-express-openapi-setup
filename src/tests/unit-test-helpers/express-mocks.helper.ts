import { Request, Response } from 'express';

export const mockRequest = {
  body: jest.fn(),
  query: {},
  headers: {},
  path: '',
} as Request;

export const mockResponse = {
  status: jest.fn().mockImplementation((code: number) => {
    mockResponse.statusCode = code;
    return mockResponse;
  }),
  json: jest.fn().mockImplementation((param: any) => {
    mockResponse.json = param;
    return mockResponse;
  }),
  send: jest.fn().mockImplementation((message: any) => {
    mockResponse.statusMessage = message;
    return mockResponse;
  }),
} as unknown as Response;
