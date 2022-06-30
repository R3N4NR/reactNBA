const knex = require('knex');

const config = require('../knexfile')

const dbK = knex(config.development);

module.exports = dbK;