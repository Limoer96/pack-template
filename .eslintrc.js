module.exports = {
  extends: ['@fruits-chain/eslint-config-preset'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    browser: true,
    es6: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    '@typescript-eslint/consistent-type-definitions': 0,
    'no-unused-vars': 1,
    'max-nested-callbacks': 'off',
    '@typescript-eslint/consistent-type-imports': 1,
    'import/no-unresolved': 2,
  },
  settings: {},
  parserOptions: {
    project: './tsconfig.json',
  },
}
