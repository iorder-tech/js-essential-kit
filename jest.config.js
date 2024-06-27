module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts'],
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!lib/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
}
