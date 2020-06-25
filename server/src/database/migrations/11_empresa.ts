import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('empresa').then(exists => {
        if (!exists) {
            return knex.schema.createTable('empresa', table => {
                table.increments('id_empresa').primary();
                table.string('nome_fantasia');
                table.string('descricao');
                table.string('email').notNullable();
                table.string('cnpj').notNullable().unique();
                table.string('fone_1').notNullable();
                table.string('fone_2');
                table.string('cep');
                table.string('logradouro');
                table.string('bairro');
                table.string('cidade');
                table.string('uf', 2);
                table.integer('status', 1).notNullable();
                table.string('instagram');
                table.string('facebook');
                table.string('imagem');
                table.timestamp('dataHora').defaultTo(knex.fn.now());
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('empresa').then(exists => {
        if (exists) {
            return knex.schema.dropTable('empresa');
        }
    })
}