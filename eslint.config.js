import tsESLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        errorOnTypeScriptSyntacticAndSemanticIssues: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsESLint,
    },
    rules: {
      // Typical correctness rules
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-empty': 'error',
      'no-unused-expressions': 'error',
      // TypeScript-level correctness rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    files: ['playwright.config.ts'],
    languageOptions: {
      globals: {
        process: 'readonly',
      },
      env: {
        node: true,
      },
    },
  },
];
