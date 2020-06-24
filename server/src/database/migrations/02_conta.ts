import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.hasTable('conta').then(exists => {
        if (!exists) {
            return knex.schema.createTable('conta', table => {
                table.increments('id_conta').primary();
                table.string('nome').notNullable();
                table.string('sobrenome').notNullable();
                table.string('usuario').notNullable();
                table.string('senha').notNullable();
                table.string('email');
                table.string('cfp').unique();
                table.string('telefone').notNullable();
                table.integer('is_whatsapp', 1).notNullable();
                table.string('cep');
                table.string('logradouro');
                table.string('bairro');
                table.string('cidade');
                table.string('uf', 2);
                table.integer('status', 1).notNullable();
                table.string('imagem');
                table.integer('tipo_conta_id')
                    .unsigned()
                    .notNullable();
                table.foreign('tipo_conta_id')
                    .references('id_tipo_conta')
                    .inTable('tipo_conta');
                table.timestamp('dataHora').defaultTo(knex.fn.now());
            });
        }
    });
}

export async function down(knex: Knex) {
    knex.schema.hasTable('conta').then(exists => {
        if (exists) {
            return knex.schema.dropTable('conta');
        }
    })
}