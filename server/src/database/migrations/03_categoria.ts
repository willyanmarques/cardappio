import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('categoria').then(exists => {
        if (!exists) {
            return knex.schema.createTable('categoria', table => {
                table.increments('id_categoria').primary();
                table.string('descricao').notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('categoria').then(exists => {
        if (exists) {
            return knex.schema.dropTable('categoria');
        }
    })
}