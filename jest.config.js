module.exports = {
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.ts',
    '**/tests/**',
    '<rootDir>/tests/**/*.spec.ts',
    '<rootDir>/**/*.spec.ts',
    '<rootDir>/tests/**/*.test.ts',
    '!<rootDir>/tests/**/*index.ts',
    '!<rootDir>/tests/**/*app.module.ts',
    '!<rootDir>/tests/**/*main.ts',
    '!<rootDir>/tests/**/*Result.ts',
    '!<rootDir>/tests/**/*interface.ts',
    '!<rootDir>/tests/**/*env.ts',
    '!<rootDir>/tests/Shared/*',
    '!<rootDir>/tests/Shared/events/*'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  coverageProvider: 'v8',
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@root/(.*)': '<rootDir>/src/$1',
    '@core/(.*)': '<rootDir>/src/core/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@modules/(.*)': '<rootDir>/src/modules/$1'
  }
}
// '@shared-core/(.*)': '<rootDir>/src/domain/shared/core/$1',
// '@shared-common/(.*)': '<rootDir>/src/domain/shared/common/$1',
//     '@repo/(.*)': '<rootDir>/src/repo/$1',
//     '@app/(.*)': '<rootDir>/src/application/$1',
//     '@config/(.*)': '<rootDir>/src/config/$1',
//     '@utils/(.*)': '<rootDir>/src/utils/$1'
