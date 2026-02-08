import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/build", "**/dist", "**/eslint.config.mjs"]), {
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    )),

    plugins: {
        react: fixupPluginRules(react),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        "react-hooks": fixupPluginRules(reactHooks),
        "react-refresh": reactRefresh,
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",

        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],

        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-undef": "error",
        "prefer-arrow-callback": "error",
        "object-shorthand": "error",
        "prefer-template": "error",
        "no-var": "error",
        "default-param-last": "error",
        "prefer-spread": "error",
        "prefer-rest-params": "error",
        "prefer-promise-reject-errors": "error",
        "require-await": "error",
        "prettier/prettier": ["error", { "singleQuote": true }],
    },
}, {
    files: ["**/*.test.*"],

    rules: {
        "no-undef": "off",
    },
}]);