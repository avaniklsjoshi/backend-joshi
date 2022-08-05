module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint-config-prettier", "eslint-config-google"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "max-len": 0,
    "prettier/prettier": 0,
    "object-curly-spacing": 0,
    quotes: 0,
    "comma-dangle": 0,
    camelcase: 0,
    "new-cap": 0,
    "space-before-function-paren": 0,
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["ConditionalExpression"],
      },
    ],
    "quote-props": ["error", "as-needed"],
  },
  plugins: ["eslint-plugin-prettier", "prettier"],
};
