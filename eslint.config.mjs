import { FlatCompat } from '@eslint/eslintrc';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';
import { dirname } from 'path';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const prettierConfig = (await prettier.resolveConfig(__dirname)) ?? {};

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
    },
    rules: {
      semi: ['error', 'always'],
      trailingComma: 'none',
    },
  },

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];

export default eslintConfig;
