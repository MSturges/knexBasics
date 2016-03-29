exports.up = function(knex, Promise) {
  return knex.schema.createTable('humans', function (table) {
    table.increments();
    table.string('name');
    table.integer('age');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {

};
