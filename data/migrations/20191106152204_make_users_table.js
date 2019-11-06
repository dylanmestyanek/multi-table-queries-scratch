
exports.up = function(knex) {
  return knex.schema.createTable('schemes', t => {
      t.increments();
      t.string('scheme_name', 128).unique().notNullable();
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('schemes');
};
