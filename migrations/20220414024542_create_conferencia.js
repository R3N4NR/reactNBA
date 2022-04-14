
  exports.up = function(knex) {
    return knex.schema.createTable('conferencias', table =>{
      table.increments('id').primary();
      table.string('oeste').notNull();
      table.string('leste').notNull();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('conferencias');
  };
  