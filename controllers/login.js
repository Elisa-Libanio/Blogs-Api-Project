const { User } = require('../models');
const { Token } = require('../services/authService');

const createLogin = async (req, res, next) => {
    try {
      const { email } = req.body;
      const findUser = await User.findOne({ where: { email } });
      // const { password: _password, ...userWithoutPassword } = findUser;
      const token = Token(findUser);
       if (!findUser) return res.status(400).json({ message: 'Invalid fields' });
      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
  }
};

module.exports = {
    createLogin,
  };
