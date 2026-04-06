import pluginJs from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    {
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        plugins: {
            "simple-import-sort": simpleImportSort,
            "unused-imports": unusedImports,
        },
    },
    { ignores: ["node_modules", "dist"] },
    {
        rules: {
            "no-console": "warn",
            "prefer-const": "error",
            "no-useless-constructor": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "unused-imports/no-unused-imports": "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
]
