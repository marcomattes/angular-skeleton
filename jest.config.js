module.exports = {
  cacheDirectory: "./.cache",
  coveragePathIgnorePatterns: [
    "/.jest/",
    "/node_modules/",
    "/.storybook/",
    "/dist/",
    "/src/fit-lang/"
  ],
  "coverageReporters": ['html', 'lcovonly', 'text-summary', 'cobertura'],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/.jest/setup.ts"
  ],
  snapshotSerializers: [],
  testPathIgnorePatterns: [
    "/.jest/",
    "/node_modules/",
    "/dist/",
    "/cypress/"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|angular2-ui-switch|ng-dynamic)"
  ],
  moduleNameMapper: {
    "@angular/(.*)": "<rootDir>/node_modules/@angular/$1"
  }
};
