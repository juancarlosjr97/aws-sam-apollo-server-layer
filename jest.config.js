module.exports = {
  testEnvironment: "node",
  coverageProvider: "v8",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/.history/",
  ],
  testTimeout: 50000,
};
