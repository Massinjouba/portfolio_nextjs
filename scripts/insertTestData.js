// scripts/insertTestData.js
const { User, Feedback } = require('../src/utils/db');

(async () => {
  try {
    // Création d'un utilisateur de test
    const user = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });

    // Création de feedbacks de test pour cet utilisateur
    await Feedback.create({
      feedback: 'Great service!',
      rating: 5,
      userId: user.id,
    });

    await Feedback.create({
      feedback: 'Could be better.',
      rating: 3,
      userId: user.id,
    });

    console.log('Test data inserted successfully!');
  } catch (error) {
    console.error('Error inserting test data:', error);
  }
})();
