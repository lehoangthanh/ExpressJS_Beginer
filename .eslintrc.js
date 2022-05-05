module.exports = {
	root: true,
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	ignorePatterns: ['bin/*', 'test/*'],
	// plugins: ['eslint-plugin-prettier'],
	rules: {
		// 'prettier/prettier': ['error'],
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'class-methods-use-this': 0,
	},
}
