exports.up = function(knex) {
    return knex.schema.createTable('times',table =>{
        table.increments()
        table.string('nome').notNull();
        table.string('cores').notNull();
        table.string('foto').notNull();
        table.string('cidade').notNull();
        table.integer('ano_criacao').notNull();
          
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('times');
  };
