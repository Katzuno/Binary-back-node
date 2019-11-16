const config = require('config');
const pg = require('pg');
pg.defaults.ssl = true;

class Database {
    constructor() {
        this._knex = require('knex')({
            client: 'sqlite3',
            connection: {
                filename: './db.sqlite3'
            }
        });
    }

    get db() {
        return this._knex;
    }

    get questions() {
        return this.db('questions').select().orderBy('question_id', 'desc');
    }

    addQuestion(q) {
        return this.db('questions').returning('*').insert(q);
    }

    async addResponse(question_id, response) {
        await this.db('responses').insert({question_id, response});
        const count = await this.db('responses').count('question_id as responses').where({question_id});
        if (count[0].responses >= 3) {
            const resp = await this.db('responses').select().where({question_id});
            await this.db('responses').where({question_id}).del();
            await this.db('questions').where({question_id}).del();
            return resp;
        }
        return false;
    }
}

module.exports = new Database();
