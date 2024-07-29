const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const sequelize = require('../../../utils/sequelize');

const signupHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      await sequelize.sync();
      const hashedPassword = await bcrypt.hash(password, 10); // Chiffrez le mot de passe avec un coût de 10
      const user = await User.create({ name, email, password: hashedPassword });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default signupHandler;
