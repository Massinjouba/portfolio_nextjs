// /src/models/Feedback.js

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const User = require('./User'); // Assurez-vous que le modèle User est correctement importé

const Feedback = sequelize.define('Feedback', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

// Associer Feedback à User
Feedback.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Feedback, { foreignKey: 'userId' });

module.exports = Feedback;
