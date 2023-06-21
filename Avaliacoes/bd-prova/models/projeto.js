const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  },
  useNullAsDefault: true
});

class Projeto {
    static async inserirProjeto(Projeto) {
      try {
        const [id] = await database('tb_projeto').insert(Projeto);
        console.log('Projeto inserido com ID:', id);
      } catch (error) {
        console.error('Erro ao inserir projeto:', error);
      } finally {
        database.destroy();
      }
    }
  
    static async atualizarProjeto(id, Projeto) {
      try {
        const result = await database('tb_projeto').where({ id }).update(Projeto);
        console.log('Projeto atualizado:', result);
      } catch (error) {
        console.error('Erro ao atualizar projeto:', error);
      } finally {
        database.destroy();
      }
    }
  
    static async obterProjeto(id) {
      try {
        const Projeto = await database('tb_projeto').where({ id }).first();
        console.log('Projeto encontrado:', Projeto);
      } catch (error) {
        console.error('Erro ao obter projeto:', error);
      } finally {
        database.destroy();
      }
    }
  
    static async excluirProjeto(id) {
      try {
        const result = await database('tb_projeto').where({ id }).del();
        console.log('Projeto excluído:', result);
      } catch (error) {
        console.error('Erro ao excluir projeto:', error);
      } finally {
        database.destroy();
      }
    }
  }
  
  module.exports = Projeto;