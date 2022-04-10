require('dotenv');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      // host: '127.0.0.1',
      // port: '5432',
      // user: 'postgres',
      // password: 'd1m3w4096',
      // database: 'aws-app'
      host: 'db',
      port: '5432',
      user: 'postgres_user',
      password: 'postgres_pass',
      database: 'postgres_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};