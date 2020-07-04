import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('adicional').then(exists => {
        if (!exists) {
            return knex.schema.createTable('adicional', table => {
                table.increments('id_adicional').primary();
                table.string('descricao').notNullable();
                table.float('valor');
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('adicional').then(exists => {
        if (exists) {
            return knex.schema.dropTable('adicional');
        }
    })
}