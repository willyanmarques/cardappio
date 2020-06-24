import Knex from 'knex'

/*******************************************************************************
    |Descrição : Mock de dados para tabela de pedido_status
    |Data      : 24/06/2020
    |Autor     : Gabriel Alcantara
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('pedido_status').insert([
        { descricao: 'Aguardando aprovação' },
        { descricao: 'Aprovado' },
        { descricao: 'Em preparo' },
        { descricao: 'Cancelado' },
        { descricao: 'Saiu para entrega' },
        { descricao: 'Entregue' },
    ]);
}

