
  exports.up = function(knex) {
    return knex.schema.createTable('conferencias', table =>{
      table.increments('id').primary();
      table.string('lado').notNullable();
          
       })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('conferencias');
  };
  