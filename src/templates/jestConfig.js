module.exports = `
{
    "jest": {
      "collectCoverageFrom": [
        "src/**/*.{js,jsx}"
      ],
      "setupFiles": [
        "<rootDir>/node_modules/microfrontend-build-tools/config/polyfills.js"
      ],
      "testPathIgnorePatterns": [
        "<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]"
      ],
      "testEnvironment": "node",
      "testURL": "http://localhost",
      "transform": {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/node_modules/microfrontend-build-tools/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/node_modules/microfrontend-build-tools/config/jest/fileTransform.js"
      },
      "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
      ],
      "moduleNameMapper": {
        "^react-native$": "react-native-web"
      }
    }
  }
`;