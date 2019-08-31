const { PG_HOST, PG_USERNAME, PG_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": PG_USERNAME || "root",
    "password": PG_PASSWORD || "postgres",
    "database": "cached-api_development",
    "host": PG_HOST || "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": PG_USERNAME || "root",
    "password": PG_PASSWORD || "postgres",
    "database": "cached-api_test",
    "host": PG_HOST || "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": PG_USERNAME || "root",
    "password": PG_PASSWORD || "postgres",
    "database": "cached-api_production",
    "host": PG_HOST || "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
