const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const dotenv = require('dotenv');
dotenv.config();

const test_type = process.env.TESTS;

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/services/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    'text-summary',
    'lcov',
  ],
  maxWorkers: 1,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: test_type ? [`<rootDir>/src/__tests__/${test_type}/**/*.spec.ts`] : ['<rootDir>/src/__tests__/**/*.spec.ts'],
  verbose: true,
};
