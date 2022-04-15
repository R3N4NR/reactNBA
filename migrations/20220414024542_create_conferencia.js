
  exports.up = function(knex) {
    return knex.schema.createTable('conferencias', table =>{
      table.increments('id').primary();
      table.string('time_id').notNull().unsigned();
      table.foreign("time_id").references("times.id")
      .onDelete("restrict").onUpdate("cascade");
      table.string('lado').notNull();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('conferencias');
  };
  