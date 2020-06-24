import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('frete').then(exists => {
        if (!exists) {
            return knex.schema.createTable('frete', table => {
                table.increments('id_frete').primary();
                table.string('uf').notNullable();
                table.string('bairro').notNullable();
                table.string('cidade').notNullable();
                table.float('valor').notNullable();
                table.integer('ativo', 1).notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('frete').then(exists => {
        if (exists) {
            return knex.schema.dropTable('frete');
        }
    })
}