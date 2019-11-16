exports.up = async function(knex) {
	await knex.schema.createTable(
		'categories',
		/**
		 * @param {import("Knex").TableBuilder} table
		 */
		function(table) {
			table.increments('category_id');
			table.string('category_name');
			table.timestamp('created_at').defaultTo(knex.fn.now());
		}
	);

	return knex('categories').insert({
		category_id: 1,
		category_name: 'Web Dev'
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('categories');
};
