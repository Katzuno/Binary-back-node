const config = require('config');
const pg = require('pg');
pg.defaults.ssl = true;

class Database {
	constructor() {
		this._knex = require('knex')({
			client: 'pg',
			connection: config.get('db.string')
		});
	}

	get db() {
		return this._knex;
	}
}

module.exports = new Database();
