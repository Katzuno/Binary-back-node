exports.up = function (knex) {
    return knex.schema.createTable(
        'responses',
        function (table) {
            table.integer('question_id');
            table.string('response');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        }
    );
};

exports.down = function (knex) {
    return knex.schema.dropTable('responses');
};
