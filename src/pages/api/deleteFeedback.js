const Feedback = require('../../models/Feedback');
const sequelize = require('../../utils/sequelize');

const deleteFeedbackHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      await sequelize.sync();
      const existingFeedback = await Feedback.findByPk(id);

      if (!existingFeedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }

      await existingFeedback.destroy();

      res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting feedback', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default deleteFeedbackHandler;
