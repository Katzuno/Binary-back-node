const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('@root/package');

const swaggerOptions = {
	info: {
		title: 'JSHacks API Documentation',
		version: Pack.version
	}
};

module.exports = [
	Inert,
	Vision,
	{
		plugin: HapiSwagger,
		options: swaggerOptions
	}
];
