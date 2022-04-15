const config = require('../knexfile.js');

const knex = require ('knex');

const dbK = knex (config.development);

module.exports = dbK;
