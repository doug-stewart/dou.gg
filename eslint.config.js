// @ts-check

import { includeIgnoreFile } from '@eslint/compat';
import { default as eslint, default as js } from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { configs as eslintPluginAstroConfigs } from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
    includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    importPlugin.flatConfigs.recommended,
    eslintPluginAstroConfigs['flat/recommended'],
    {
        plugins: { 'jsx-a11y': jsxA11y },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        rules: {
            'import/default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/no-named-as-default': 'off',
            'import/no-unresolved': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        },
    },
]);
