// /src/pages/api/saveFeedback.js

const Feedback = require('../../models/Feedback');
const sequelize = require('../../utils/sequelize');

const saveFeedbackHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { rating, feedback, userId } = req.body;

    try {
      await sequelize.sync();
      const newFeedback = await Feedback.create({ rating, feedback, userId });
      res.status(201).json({ message: 'Feedback saved successfully', newFeedback });
    } catch (error) {
      res.status(400).json({ message: 'Error saving feedback', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default saveFeedbackHandler;
