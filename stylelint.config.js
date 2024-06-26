module.exports = {
  extends: ['@fruits-chain/stylelint-config-preset'],
  rules: {
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [/~`\w*/, 'fade'],
      },
    ],
    // 颜色指定大写
    // 'color-hex-case': 'upper',
    // 禁止空块
    // 'block-no-empty': true,
    // 颜色6位长度
    // 'color-hex-length': 'long',
    // 兼容自定义标签名
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [],
      },
    ],
    // 忽略伪类选择器 ::v-deep
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'no-descending-specificity': null,
    // 不验证@未知的名字，为了兼容scss的函数
    // 'at-rule-no-unknown': null,
    // 禁止空注释
    // 'comment-no-empty': true,
    // 禁止简写属性的冗余值
    // 'shorthand-property-no-redundant-values': true,
    // 禁止值的浏览器引擎前缀
    // 'value-no-vendor-prefix': true,
    // property-no-vendor-prefix
    // 'property-no-vendor-prefix': true,
    // // 小于 1 的小数有一个前导零
    // 'number-leading-zero': 'always',
    // 禁止空第一行
    // 'no-empty-first-line': true,
  },
}
