const { User } = require('../models');
const { searchByEmail, findUsers, findUsersById } = require('../services/userService');
const { Token } = require('../services/authService');

const createUser = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;
        const user = { displayName, email, image };
       const answer = await searchByEmail(email);
        
        const Tk = Token(user);
      await User.create({ displayName, email, password, image });
       if (answer !== undefined) return res.status(409).json({ message: answer.message });
       return res.status(201).json({ token: Tk });
    } catch (err) {
        next(err);
    }
  }; 
const findAllUsers = async (_req, res, next) => {
    try {
      const users = await findUsers();
      console.log(users, 'users retornando do service');
     return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  };
const findUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await findUsersById(id);
        if (!user) return res.status(404).json({ message: 'User does not exist' });
     return res.status(200).json(user);
    } catch (err) {
      return next(err);
    }
  };
  module.exports = { createUser, findAllUsers, findUserById };
