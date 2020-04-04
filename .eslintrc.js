module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'airbnb-base',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
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
        "no-alerts": [0]
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js",".jsx"]
          }
        }
    },
};