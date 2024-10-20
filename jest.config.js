module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
  collectCoverage: true,
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|less|scss|otf)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
};
