module.exports = {
  coverageDirectory: './coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/test/*.{spec.js,vue}',
    'components/**/component/*.{js,vue}',
    'components/!utils/*.js',
    '!**/node_modules/**'
  ],
  moduleFileExtensions: ['js', 'json', 'vue'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  moduleNameMapper: {},
  transform: {
    // '.*\\.(vue)$': 'vue-jest',
    // '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process *.vue files with vue-jest
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  }
}
