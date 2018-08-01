require('dotenv').config();

const config = {
  "port": process.env.PORT,
  "sqldb": {
    "dialect": "mssql",
    "server": "localhost",
    dialectOptions: {  // Not needed if you connect to the default instance
      instanceName: "SQLEXPRESS"
    },
    "database": process.env.MSSQL_DB_NAME,
    "username": process.env.MSSQL_DB_USER,
    "password": process.env.MSSQL_DB_PASSWORD
  },
  "winston": { // and Loggly details
    token: process.env.LOGGER_TOKEN,
    subdomain: "myCompanyAccount",
    tags: ["graphql-to-sql", "api"],
    handleExceptions: true,
    json: true
  }
}

export default config;
