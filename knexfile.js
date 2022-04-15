module.exports = {
development: {
    client: 'mysql',
    connection: {
      host:"localhost",
      port: 3306,
      user:     'root',
      password: 'password',
      database:"dbtimes"

    },
    
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory :'./seeds'
    }
  
  }
};
