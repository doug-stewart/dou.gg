module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'new-cap': 'off',
    'camelcase': 'off',
    'operator-linebreak': ['error', 'after', { overrides: { '=': 'none', '?': 'before', ':': 'before' } }],
    'one-var': ['error', 'never'],
    'eqeqeq': 'error',
    'generator-star-spacing': ['error', {
      'before': true,
      'after': true
    }],

    'require-await': 'error'
  }
};
