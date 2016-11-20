module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'media-feature-no-missing-punctuation': true,
    'declaration-block-no-ignored-properties': true,
    'number-leading-zero': 'never',
    'selector-no-empty': true,
    'string-quotes': 'single',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/double-slash-comment-empty-line-before': 'always',
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};
