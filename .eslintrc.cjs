// eslint-disable-next-line no-use-before-define
module.exports = {
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	root: true,
	rules: {
		"@typescript-eslint/no-namespace": "off",
		'@typescript-eslint/no-non-null-assertion': 'off'
	},
	env: {
		node: true
	},
};