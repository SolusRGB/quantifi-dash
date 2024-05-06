/**
 * This is used for the Jest configuration.
 * It is used to validate the TypeScript code.
 */

module.exports = {
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(node-fetch)/)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@tests/(.*)$": "<rootDir>/__tests__/$1",
    "node-fetch": "<rootDir>/node_modules/node-fetch/src/index.js",
  },
};
