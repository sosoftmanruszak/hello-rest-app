module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 8    ,
        "sourceType": "module"
    },
    "rules": {
        "quotes": ["error", "single"],
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    }
};