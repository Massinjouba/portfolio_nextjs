// /src/pages/api/getFeedbacks.js

const Feedback = require('../../models/Feedback');
const User = require('../../models/User');
const sequelize = require('../../utils/sequelize');

const getFeedbacksHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      await sequelize.sync();
      const feedbacks = await Feedback.findAll({
        include: {
          model: User,
          attributes: ['name'],
        },
      });
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching feedbacks', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default getFeedbacksHandler;
