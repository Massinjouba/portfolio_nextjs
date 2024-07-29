const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const sequelize = require('../../../utils/sequelize');

const loginHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      await sequelize.sync();
      const user = await User.findOne({ where: { email } });

      if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error during login', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default loginHandler;
