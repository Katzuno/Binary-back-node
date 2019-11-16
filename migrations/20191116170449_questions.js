exports.up = function (knex) {
    return knex.schema.createTable(
        'questions',
        function (table) {
            table.increments('question_id');
            table.string('questions');
            table.string('image');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        }
    );
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions');
};
