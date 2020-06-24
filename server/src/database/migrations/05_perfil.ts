import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('perfil').then(exists => {
        if (exists) {
            knex.schema.dropTable('perfil');
        }
        if (!exists) {
            return knex.schema.createTable('perfil', table => {
                table.increments('id_perfil').primary();
                table.string('descricao').notNullable();
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('perfil').then(exists => {
        if (exists) {
            return knex.schema.dropTable('perfil');
        }
    })
}