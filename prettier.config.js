/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: false,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 100,
  jsxSingleQuote: false,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
}
