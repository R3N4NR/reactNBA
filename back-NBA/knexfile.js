module.exports = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './data/timesNBA_DB.db3'
    },
    useNullAsDefault: true,    
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }  
  },
};
