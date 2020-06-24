import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: 'password',
        database: 'cardappio.dev'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};