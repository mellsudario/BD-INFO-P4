const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  },
  useNullAsDefault: true
});

class Tarefas {
    static async inserirTarefas(Tarefas) {
      try {
        const [id] = await database('tb_tarefas').insert(Tarefas);
        console.log('Tarefas inserido com ID:', id);
      } catch (error) {
        console.error('Erro ao inserir tarefas:', error);
      } finally {
        database.destroy();
      }
    }
  
    static async atualizarTarefas(id, Tarefas) {
      try {
        const result = await database('tb_tarefas').where({ id }).update(Tarefas);
        console.log('Tarefas atualizado:', result);
      } catch (error) {
        console.error('Erro ao atualizar tarefas:', error);
      } finally {
        database.destroy();
      }
    }
  
    static async obterTarefas(id) {
      try {
        const Tarefas = await database('tb_tarefas').where({ id }).first();
        console.log('Tarefas encontrado:', Tarefas);
      } catch (error) {
        console.error('Erro ao obter tarefas:', error);
      } finally {
        database.destroy();
      }
    }
  
    static async excluirTarefas(id) {
      try {
        const result = await database('tb_tarefas').where({ id }).del();
        console.log('tarefas excluído:', result);
      } catch (error) {
        console.error('Erro ao excluir tarefas:', error);
      } finally {
        database.destroy();
      }
    }
  }
  
  module.exports = Tarefas;