const defaultConfig = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	...defaultConfig,
	{
		settings: {
			// @wordpress/* packages are WordPress externals, not installed.
			'import/core-modules': [
				'@wordpress/api-fetch',
				'@wordpress/block-editor',
				'@wordpress/blocks',
				'@wordpress/components',
				'@wordpress/core-data',
				'@wordpress/data',
				'@wordpress/element',
				'@wordpress/html-entities',
				'@wordpress/i18n',
				'@wordpress/server-side-render',
				'@wordpress/url',
			],
		},
	},
];
