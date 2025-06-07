import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginNoOnlyTests from 'eslint-plugin-no-only-tests'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import typescriptEslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...typescriptEslint.config(
    {
      ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'build/**', 'out/**'],
    },
    eslint.configs.recommended,
    ...typescriptEslint.configs.strict,
    ...typescriptEslint.configs.stylistic,
    {
      plugins: {
        'no-only-tests': eslintPluginNoOnlyTests,
        'simple-import-sort': eslintPluginSimpleImportSort,
        import: eslintPluginImport,
        prettier: eslintPluginPrettier,
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'no-only-tests/no-only-tests': 'error',
        'prettier/prettier': 'error',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
      },
    },
    eslintConfigPrettier,
  ),
]
