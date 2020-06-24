import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('entregador').then(exists => {
        if (!exists) {
            return knex.schema.createTable('entregador', table => {
                table.increments('id').primary();
                table.string('nome').notNullable();
                table.string('sobrenome').notNullable();
                table.string('email');
                table.string('cpf').notNullable();
                table.string('telefone').notNullable();
                table.string('logradouro').notNullable();
                table.string('bairro').notNullable();
                table.string('cidade').notNullable();
                table.string('uf', 2).notNullable();
                table.timestamp('dataHora').defaultTo(knex.fn.now());
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('entregador').then(exists => {
        if (exists) {
            return knex.schema.dropTable('entregador');
        }
    })
}