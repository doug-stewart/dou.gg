import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
// import eslintPluginAstro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// import tseslint from 'typescript-eslint';

export default [
    { ignores: ['**/env.d.ts', '.astro/*', 'node_modules/*', 'dist/*'] },
    eslint.configs.recommended,
    // ...tseslint.configs.recommendedTypeChecked,
    importPlugin.flatConfigs.recommended,
    eslintPluginPrettierRecommended,
    eslintConfigPrettier,
    {
        plugins: { 'jsx-a11y': jsxA11y },
        files: ['**/*.js', '**/*.ts', '**/*.cjs', '**/*.mjs'],
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
            // '@typescript-eslint/no-unused-vars': 'error',
            // '@typescript-eslint/explicit-function-return-type': 'off',
            // '@typescript-eslint/explicit-module-boundary-types': 'off',
            // '@typescript-eslint/no-empty-function': 'off',
            // '@typescript-eslint/no-explicit-any': 'off',
            'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    // ...eslintPluginAstro.configs.recommended,
    // {
    //     files: ['*.astro'],
    //     parser: 'astro-eslint-parser',
    //     parserOptions: {
    //         parser: '@typescript-eslint/parser',
    //         extraFileExtensions: ['.astro'],
    //     },
    // },
];
