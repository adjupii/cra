module.exports = {
  roots: [ '<rootDir>/src' ],
  setupFilesAfterEnv: [ './jest.setup.js' ],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/__mocks__/style.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};