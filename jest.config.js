module.exports = {
  transform: {
      '^.+\\.js$'  : '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'vue'] // テスト対象の拡張子を列挙する
}

