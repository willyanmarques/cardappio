import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cardappio',
        charset: 'utf8'
    }
});



export default connection;