module.exports = {

    client: 'mysql',
    connection: {
      database: './config/dbtimes.sql',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory :'./seeds'
    }
  

};
