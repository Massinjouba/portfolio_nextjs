const Feedback = require('../../models/Feedback');
const sequelize = require('../../utils/sequelize');

const updateFeedbackHandler = async (req, res) => {
  if (req.method === 'PUT') {
    const { id, rating, feedback } = req.body;

    try {
      await sequelize.sync();
      const existingFeedback = await Feedback.findByPk(id);

      if (!existingFeedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }

      existingFeedback.rating = rating;
      existingFeedback.feedback = feedback;
      await existingFeedback.save();

      res.status(200).json({ message: 'Feedback updated successfully', existingFeedback });
    } catch (error) {
      res.status(400).json({ message: 'Error updating feedback', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default updateFeedbackHandler;
