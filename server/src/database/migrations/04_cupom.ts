import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('cupom').then(exists => {
        if (exists) {
            knex.schema.dropTable('cupom');
        }
        if (!exists) {
            return knex.schema.createTable('cupom', table => {
                table.increments('id_cupom').primary();
                table.float('codigo').notNullable();
                table.string('descricao').notNullable();
                table.float('valor').notNullable();
                table.date('validade').notNullable();
                table.integer('ativo', 1).notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('cupom').then(exists => {
        if (exists) {
            return knex.schema.dropTable('cupom');
        }
    })
}