import Knex from 'knex';

/*******************************************************************************
    |Descrição : Mock de dados para tabela de categorias
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('categoria').insert([
        { descricao: 'Cervejas' },
        { descricao: 'Pizzas' },
        { descricao: 'Hamburgers' },
        { descricao: 'Petiscos' },
        { descricao: 'Sucos' },
        { descricao: 'Sobremesas' }
    ]);
}
