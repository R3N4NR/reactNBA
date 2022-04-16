exports.up = function(knex) {
    return knex.schema.createTable('times',table =>{
        table.increments('id').primary();
        table.string('nome').notNull();
        table.string('cores').notNull();
        table.string('cidade').notNull();
        table.string('ano_criacao').notNull();
        
        table.integer("conferencia_id").notNullable().unsigned();        
        table.foreign("conferencia_id").references("conferencias.id")

        
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('times');
  };

