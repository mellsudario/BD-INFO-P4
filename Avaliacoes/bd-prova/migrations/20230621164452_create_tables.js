/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    exports.up = function(knex, Promise) {
        return knex.schema.createTable('tb_tarefas', table => {
            table.increment('id').primary()
            table.string('descricao').notNull()
            table.string('status').notNull()
            table.string('projeto_id').unsigned.notNull()
            table.foreign('projeto_id').references('id').inTable('tb_projeto')
        })
    };    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tb_tarefas')
};
