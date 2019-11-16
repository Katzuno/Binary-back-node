exports.up = async function(knex) {
	await knex.schema.createTable(
		'teachers',
		/**
		 * @param {import("Knex").TableBuilder} table
		 */
		function(table) {
			table.integer('user_id');
			table.timestamp('created_at').defaultTo(knex.fn.now());
			table.json('tags');
			table.float('rate');
			table.boolean('live');

			table.foreign('user_id').references('users.user_id');
		}
	);

	for (let i = 3; i <= 7; i++) {
		await knex('teachers').insert({
			user_id: i,
			tags: '["PHP","NodeJS","Angular"]',
			rate: 50.0 + Number.parseFloat(i),
			live: true
		});
	}

	return knex('teachers').insert({
		user_id: 1,
		tags: '["PHP","NodeJS","Angular"]',
		rate: 50.0,
		live: true
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('teachers');
};
