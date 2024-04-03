module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'prettier/prettier': ['error'],
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
