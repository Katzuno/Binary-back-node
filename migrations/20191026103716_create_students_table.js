exports.up = async function(knex) {
	await knex.schema.createTable(
		'students',
		/**
		 * @param {import("Knex").TableBuilder} table
		 */
		function(table) {
			table.integer('user_id');
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.json('tags');

			table.foreign('user_id').references('users.user_id');
		}
	);

	return knex('students').insert({
		user_id: 2,
		tags: '["Matematica","C++"]'
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('students');
};
