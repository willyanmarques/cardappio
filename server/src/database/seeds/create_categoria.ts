import Knex from 'knex';

/*******************************************************************************
    |Descrição : Mock de dados para tabela de categorias
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('categoria').insert([
        { descricao: 'Cervejas', ativo: 1 },
        { descricao: 'Pizzas', ativo: 1 },
        { descricao: 'Hamburgers', ativo: 1 },
        { descricao: 'Petiscos', ativo: 1 },
        { descricao: 'Sucos', ativo: 1 },
        { descricao: 'Sobremesas', ativo: 1 }
    ]);
}
