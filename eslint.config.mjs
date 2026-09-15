export default [
  {
    ignores: ["dist"],
  },

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        confirm: "readonly",
      },
    },

    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
