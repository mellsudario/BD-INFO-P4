exports.seed = function(knex) {
    return knex('tb_tarefas')
    .del()
    .then(function(){
        return knex('tb_tarefas').insert([
            {descricao: 'Tarefa 1', status: 'Em andamento', projeto_id: 1},
            {descricao: 'Tarefa 2', status: 'Concluída', projeto_id: 1},
            {descricao: 'Tarefa 3', status: 'Pendente', projeto_id: 1},
        ]);
    })
    };