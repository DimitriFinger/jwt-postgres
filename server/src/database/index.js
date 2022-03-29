const knex = require('knex');
const knexfile = require('../services/knexfile');


const db = knex(knexfile.development);

module.exports = db;