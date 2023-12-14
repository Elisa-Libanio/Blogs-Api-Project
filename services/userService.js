const { User } = require('../models');

const searchByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
  
    if (user !== null) return { message: 'User already registered' };
  };
const findUsers = async () => {
    const users = await User.findAll();
  
    return users;
  };

  const findUsersById = async (id) => {
    const users = await User.findByPk(id);
  
    return users;
  };
  module.exports = { searchByEmail, findUsers, findUsersById };
