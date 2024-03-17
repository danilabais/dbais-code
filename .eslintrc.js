module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },

  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {},
};
