module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    './setupTest.js',
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
