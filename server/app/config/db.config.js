// 共通設定
const Sequelize = require('sequelize');

// 本番環境
const sequelize = new Sequelize(process.env.DATABASE_URL, 
  {
    dialect: 'postgres'
  }
);

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Customer = require('../models/customer.model.js')(sequelize, Sequelize);
 
module.exports = db;