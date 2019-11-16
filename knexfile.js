const pg = require('pg');
const config = require('config');
pg.defaults.ssl = true;

module.exports = {
	client: 'pg',
	connection: config.get('db.string')
};
