import js from '@eslint/js';
import tsESlintPlugin from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    importPlugin.flatConfigs.recommended,
    eslintPluginAstro.configs['flat/recommended'],
    {
        files: ['**/*.astro', '**/*.{ts,tsx}', '**/*.{js,jsx}'],
        plugins: {
            'jsx-a11y': jsxA11y,
            '@typescript-eslint': tsESlintPlugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/no-named-as-default': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        },
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
    },
    {
        ignores: [
            '.github/*',
            '.astro/*',
            'dist/*',
            'node_modules/*',
            '**/env.d.ts',
            'types.generated.d.ts',
        ],
    },
);
