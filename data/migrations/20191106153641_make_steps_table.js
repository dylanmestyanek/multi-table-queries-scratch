
exports.up = function(knex) {
  return knex.schema.createTable('steps', t => {
      t.increments();
      t.integer('scheme_id')
        .notNullable()
        .references('id')
        .inTable('schemes');
      t.integer('step_number').notNullable();
      t.string('instructions', 256).notNullable();
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
