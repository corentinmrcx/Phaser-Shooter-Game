import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigESLint from "eslint-config-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: ["node_modules"],
  },
  pluginJs.configs.recommended,
  ...eslintConfigESLint,
  eslintPluginPrettierRecommended,
];
