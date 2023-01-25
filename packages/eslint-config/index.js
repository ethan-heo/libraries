module.exports = {
    extends: ["eslint:recommended"],
    rules: {
        "no-var": "error",
        "no-new-object": "error",
        "object-shorthand": "error",
        "quote-props": 2,
        "no-prototype-builtins": "error",
        "prefer-object-spread": "error",
        "no-array-constructor": "error",
        "prefer-destructuring": ["error", { object: true, array: false }],
    },
    ignorePatterns: ["node_modules", "dist", "public"],
};
