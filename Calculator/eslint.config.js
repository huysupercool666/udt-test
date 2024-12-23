export default [
  {
    ignores: [".config/*", "src/dist/*", "src/build/*", "src/public/*","src/node_modules/*","src/server/*","src/client/*"],
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      'prefer-const': 'warn',
      'no-constant-binary-expression': 'error'
    }
  }
]
