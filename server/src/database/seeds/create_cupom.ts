import Knex from 'knex';

/*******************************************************************************
    |Descrição : Mock de dados para tabela de cupons
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('cupom').insert([
        { codigo: 'SUPER10', descricao: 'Ganhe 10% de desconto!', valor: 10, validade: '2020-12-30', ativo: 1 },
        { codigo: 'SUPER20', descricao: 'Ganhe 20% de desconto!', valor: 10, validade: '2020-12-30', ativo: 1 }
    ]);
}
