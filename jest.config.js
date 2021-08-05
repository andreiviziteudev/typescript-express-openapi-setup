module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['!src/index.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/src/server.ts',
    '<rootDir>/src/configs/',
    '<rootDir>/src/controllers/index.ts',
    '<rootDir>/src/docs/',
    '<rootDir>/src/helpers/Logger.helper.ts',
    '<rootDir>/src/tests/',
  ],
};
