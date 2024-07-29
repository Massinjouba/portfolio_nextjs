// /src/utils/sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Emplacement du fichier SQLite
});

module.exports = sequelize;
