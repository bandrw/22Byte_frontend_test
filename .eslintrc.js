module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: './',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	plugins: [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
		'import',
	],
	rules: {
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
		}],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'import/prefer-default-export': 0,
		'import/extensions': 0,
		'object-curly-spacing': ['error', 'never'],
		'object-curly-newline': ['error', {
			ObjectExpression: 'always',
			ObjectPattern: {
				multiline: true,
			},
			ImportDeclaration: 'never',
			ExportDeclaration: {
				multiline: true, minProperties: 3,
			},
		}],
		'react/no-array-index-key': 0,
		'react/jsx-indent': 0,
		'react/jsx-filename-extension': ['error', {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		}],
		'react/jsx-indent-props': 0,
		'react/function-component-definition': ['error', {
			namedComponents: 'arrow-function',
			unnamedComponents: 'arrow-function',
		}],
		'react/jsx-props-no-spreading': 0,
		'react/jsx-max-props-per-line': [2, {
			maximum: 1,
		}],
		'react/require-default-props': 0,
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'arrow-body-style': 0,
		'no-param-reassign': 0,
	},
	settings: {
		'import/resolver': {
			typescript: {
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
