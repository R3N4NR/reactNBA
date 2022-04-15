
exports.up = function(knex) {
    return knex.schema.createTable('times',table =>{
        table.integer('id').primary();
        table.string('nome').notNull();
        table.string('cores').notNull();
        table.string('cidade').notNull();
        table.string('ano_criacao').notNull();
        table.integer('conferencia_id').notNull().unsigned();
        table.foreign('conferencia_id').references('conferencias.id')
        .onDelete("restrict").onUpdate("cascade");
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('times');
  };