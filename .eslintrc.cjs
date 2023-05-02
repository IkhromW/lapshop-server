module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	overrides: [
		{
			files: "**/*.vue",
			parser: "@vue-eslint/parser",
		},
		{
			files: "**/*.test.*",
			rules: {
				"@typescript-eslint/no-unsafe-call": "off",
			},
		},
		{
			extends: [
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			files: "**/*.ts*",
			parserOptions: {
				project: ["./tsconfig.json"],
				tsconfigRootDir: __dirname,
			},
		},
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",

	root: true,
};
