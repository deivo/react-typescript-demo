module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "rules": {
        "no-var": "error",                             /* 使用var声明会报错 */
        "no-extra-semi": "error",
        "@typescript-eslint/indent": ["error", 4]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    }
}