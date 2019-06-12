module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": ["eslint:recommended","airbnb"],
    "rules": {
        "no-console": "off",
        "no-unused-vars": "off",
        "no-set-state": "off"
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions":{
      "ecmaVersion":6,
      "sourceType":"module",
      "ecmaFeatures":{
        "jsx":true,
      },
    },
}
