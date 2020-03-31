module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "indent": [
          "error",
          4, { "SwitchCase": 1 }
      ],
      "comma-dangle": [
            "warn",
            {
                "objects": "always",
                "imports": "always",
                "exports": "never",
                "functions": "never"
            }
        ],
        "max-len": [
            "warn",
            {
                "code": 100,
                "ignoreStrings": true
            }
        ],
  },
};
