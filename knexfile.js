const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'data', 'firehall.db3')
    },
    migrations: {
      directory: path.join(__dirname, 'data', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'data', 'seeds')
    },
    useNullAsDefault: true
  },
};
