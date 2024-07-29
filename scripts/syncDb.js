// scripts/syncDb.js
const { sequelize, User, Feedback } = require('../src/utils/db');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const dbPath = path.join(__dirname, '../src/utils/database.sqlite');
    
    // Supprimez le fichier de la base de données s'il existe
    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }

    // Synchronisez les modèles avec la base de données
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error creating database & tables:', error);
  }
})();
