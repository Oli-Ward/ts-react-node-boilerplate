import pluginJs from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import noDefaultExport from "eslint-plugin-import"
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths"
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
    globalIgnores(["node_modules", "dist"]),
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        extends: [
            pluginJs.configs.recommended,
            ...tseslint.configs.recommended,
            eslintPluginPrettierRecommended,
        ],
        plugins: {
            "simple-import-sort": simpleImportSort,
            "unused-imports": unusedImports,
            "prefer-arrow-functions": preferArrowFunctions,
            "no-relative-import-paths": noRelativeImportPaths,
            import: noDefaultExport,
        },
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
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
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "prefer-arrow-functions/prefer-arrow-functions": "error",
            "no-relative-import-paths/no-relative-import-paths": [
                "error",
                { allowSameFolder: true },
            ],
            "import/no-default-export": "error",
        },
    },
    {
        files: ["*.config.js", "*.config.ts"],
        rules: {
            "import/no-default-export": "off",
        },
    },
])
