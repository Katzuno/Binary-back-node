const pg = require('pg');
const config = require('config');
pg.defaults.ssl = true;

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: './db.sqlite3'
    }
};
