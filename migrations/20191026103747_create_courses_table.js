exports.up = async function(knex) {
	await knex.schema.createTable(
		'courses',
		/**
		 * @param {import("Knex").TableBuilder} table
		 */
		function(table) {
			table.increments('course_id');
			table.integer('user_id');
			table.integer('category_id');
			table.string('course_name');
			table.timestamp('created_at').defaultTo(knex.fn.now());

			table.foreign('user_id').references('users.user_id');
			table.foreign('category_id').references('categories.category_id');
		}
	);

	for (let i = 3; i <= 7; i++) {
		await knex('courses').insert({
			user_id: i,
			category_id: 1,
			course_name: 'Angular pentru incepatori v' + i
		});
	}

	return knex('courses').insert({
		user_id: 1,
		category_id: 1,
		course_name: 'Angular pentru incepatori'
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('courses');
};
