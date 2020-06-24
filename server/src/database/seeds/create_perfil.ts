import Knex from 'knex'

/*******************************************************************************
    |Descrição : Mock de dados para tabela de perfil
    |Data      : 24/06/2020
    |Autor     : Willyan Marques
********************************************************************************/

export async function seed(knex: Knex) {
    await knex('perfil').insert([
        { descricao: 'Administrador' },
        { descricao: 'Operador' }
    ]);
}