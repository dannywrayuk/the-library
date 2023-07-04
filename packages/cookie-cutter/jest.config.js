/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  watchPathIgnorePatterns: [".TEST_OUTPUT"],
  coveragePathIgnorePatterns: ["handlebarsParse.ts"],
};
