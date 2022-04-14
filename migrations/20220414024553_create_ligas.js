exports.up = function(knex) {
    return knex.schema.createTable('ligas', table => {
        table.increments('id').primary();
        table.string('sudeste').notNull();
        table.string('leste').notNull();
        table.string('oeste').notNull();
        table.string('norte').notNull();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ligas'); 
  };
  