import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: await import('@typescript-eslint/parser').then((m) => m.default),
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/semi': ['error', 'always'],
    },
  },

  {
    rules: {
      semi: ['error', 'always'],
    },
  },

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          jsxSingleQuote: true,
        },
      ],
    },
  },

  prettierConfig,
];

export default eslintConfig;
