import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('tipo_conta').then(exists => {
        if (exists) {
            knex.schema.dropTable('tipo_conta');
        }
        if (!exists) {
            return knex.schema.createTable('tipo_conta', table => {
                table.increments('id_tipo_conta').primary();
                table.string('discricao').notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('tipo_conta').then(exists => {
        if (exists) {
            return knex.schema.dropTable('tipo_conta');
        }
    })
}