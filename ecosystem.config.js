module.exports = {
	apps: [
		{
			name: 'binary',
			script: './src/app.js',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
