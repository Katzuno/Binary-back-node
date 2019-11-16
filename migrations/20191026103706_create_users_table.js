const chance = require('chance').Chance();

exports.up = async function(knex) {
	await knex.schema.createTable(
		'users',
		/**
		 * @param {import("Knex").TableBuilder} table
		 */
		function(table) {
			table.increments('user_id');
			table.boolean('isStudent');
			table.boolean('isTeacher');
			table.string('name');
			table.string('email');
			table.string('password');
			table.string('location');
			table.string('headline');
			table.timestamp('created_at').defaultTo(knex.fn.now());
		}
	);

	await knex('users').insert({
		user_id: 1,
		isStudent: false,
		isTeacher: true,
		name: chance.first() + ' ' + chance.last(),
		email: 'test1@test.ro',
		password: 'test123',
		location: chance.city(),
		headline: 'Angular developer at ' + chance.word()
	});

	for (let i = 3; i <= 7; i++) {
		await knex('users').insert({
			user_id: i,
			isStudent: false,
			isTeacher: true,
			name: chance.first() + ' ' + chance.last(),
			email: 'test' + i + '@test.ro',
			password: 'test123',
			location: chance.city(),
			headline: 'Angular developer at ' + chance.word()
		});
	}

	await knex('users').insert({
		user_id: 2,
		isStudent: true,
		isTeacher: false,
		name: chance.first() + ' ' + chance.last(),
		email: 'test2@test.ro',
		password: 'test123',
		location: chance.city(),
		headline: 'Student anul 3'
	});

	return true;
};

exports.down = function(knex) {
	return knex.schema.dropTable('users');
};
