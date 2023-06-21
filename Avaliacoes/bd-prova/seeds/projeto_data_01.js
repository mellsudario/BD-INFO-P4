exports.seed = function(knex) {
    return knex('tb_projeto')
    .del()
    .then(function(){
        return knex('tb_projeto').insert([
            {nome: 'Projeto 1', descricao: 'Descrição do Projeto 1', prazo: '2024-01-21'},
            {nome: 'Projeto 2', descricao: 'Descrição do Projeto 2', prazo: '2023-10-28'},
        ]);
    })
    };