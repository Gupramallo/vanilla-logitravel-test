import airbnbBase from 'eslint-config-airbnb-base'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
      semi: ['error', 'never'],
      'no-console': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'max-lines': [2, 250],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'no-undef': 'error',
      'no-var': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: "VariableDeclaration[kind='let']",
          message: 'Use const instead of let.',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'no-duplicate-imports': 'error', // Use ESLint's built-in rule instead
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        localStorage: 'readonly',
        parseInt: 'readonly',
      },
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
]
