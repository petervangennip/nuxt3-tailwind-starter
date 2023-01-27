module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
    'plugin:vuejs-accessibility/recommended',
  ],

  plugins: ['vuejs-accessibility'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-template-shadow': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  },
};
