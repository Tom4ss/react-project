import globals from 'globals'
import pluginJs from '@eslint/js'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: globals.browser
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    ignores: ['node_modules']
  },
  prettierConfig
]
