const env = {
  database: 'process.env.ENV_DATABASE',
  username: 'process.env.ENV_USER',
  password: 'process.env.ENV_PASSWORD',
  host: 'process.env.ENV_HOST',
  port: 'process.env.ENV_PORT',
  dialect: 'postgres',
  operatorsAliases: false,
  production: {
    use_env_variable: "process.env.DATABASE_URL"
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
};

module.exports = env;