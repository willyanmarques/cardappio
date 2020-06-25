import Knex from 'knex'

/*******************************************************************************
    |Descrição : Mock de dados para tabela de tipo_conta
    |Data      : 24/06/2020
    |Autor     : Gabriel Alcantara
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('tipo_conta').insert([
        { descricao: 'Entregador' },
        { descricao: 'Empresa' },
        { descricao: 'Cliente' },
    ]);
}