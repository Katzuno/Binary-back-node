exports.up = async function(knex) {
	await knex.schema.createTable(
		'lessons',
		/**
		 * @param {import("Knex").TableBuilder} table
		 */
		function(table) {
			table.increments('lesson_id');
			table.integer('course_id');
			table.integer('student_id');
			table.timestamp('created_at').defaultTo(knex.fn.now());

			table.foreign('course_id').references('courses.course_id');
			table.foreign('student_id').references('users.user_id');
		}
	);

	return knex('lessons').insert({
		lesson_id: 1,
		course_id: 1,
		student_id: 2
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('lessons');
};
