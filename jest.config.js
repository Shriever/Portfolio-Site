module.exports = {
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ['./setup-test-env.js'],
};
module.exports = {
  transform: {
    '^.+\\.jsx?$': `./jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `./__mocks__/file-mock.js`,
  },
  testEnvironment: `jsdom`,
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `./public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`./loadershim.js`],
  setupFilesAfterEnv: ['./setup-test-env.js'],
};