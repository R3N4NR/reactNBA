
  exports.up = function(knex) {
    return knex.schema.createTable('conferencias', table =>{
      table.integer('id').primary();
      table.string('lado').notNull();
      table.string('time').notNull();     
    
       })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('conferencias');
  };
  