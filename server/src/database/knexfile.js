require('dotenv');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '5432',
      user: process.env.DB_USER || ,
      password: process.env.DB_PASSWORD || ,
      database: process.env.DB_NAME || 'aws-app'
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