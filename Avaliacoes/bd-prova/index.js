const projetoModel = require('./models/projeto_model');
const tarefasModel = require('./models/tarefas_model');

async function main() {
    // Criação de um projeto
    const projeto = { nome: 'Novo Projeto', descricao: 'Descrição do Novo Projeto', prazo: '2023-07-30' };
    const novoProjeto = await projetoModel.create(projeto);
    console.log('Novo projeto criado:', novoProjeto);
  
    // Leitura de um projeto pelo ID
    const projetoLido = await projetoModel.read(1);
    console.log('Projeto lido:', projetoLido);
  
    // Atualização de um projeto pelo ID
    const projetoAtualizado = await projetoModel.update(1, { descricao: 'Nova descrição' });
    console.log('Projeto atualizado:', projetoAtualizado);
  
    // Exclusão de um projeto pelo ID
    const projetoExcluido = await projetoModel.delete(1);
    console.log('Projeto excluído:', projetoExcluido);
  
    // Listagem de todos os projetos
    const projetos = await projetoModel.list();
    console.log('Projetos:', projetos);
  
    // Criação de uma tarefa associada a um projeto
    const tarefa = { descricao: 'Nova Tarefa', status: 'Em andamento', projeto_id: 2 };
    const novaTarefa = await tarefasModel.create(tarefa);
    console.log('Nova tarefa criada:', novaTarefa);
  
    // Listagem de todas as tarefas
    const tarefas = await tarefasModel.list();
    console.log('Tarefas:', tarefas);
  }
  
  main().catch(console.error);
  