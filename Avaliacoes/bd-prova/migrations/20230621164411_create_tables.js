/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    exports.up = function(knex, Promise) {
        return knex.schema.createTable('tb_projeto', table => {
            table.increment('id').primary()
            table.string('nome').notNull()
            table.string('descricao').notNull()
            table.date('prazo').notNull()
        })
    };
    
  
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('tb_projeto')
    };
}
