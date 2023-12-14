const { Op } = require('sequelize');
const { Category } = require('../models');

const displayNameLength = {
    message: '"displayName" length must be at least 8 characters long',
    
  };
  
  const emailMessage = {
    message: '"email" must be a valid email',
    
  };
  
  const emailIsRequireMessage = {
    message: '"email" is required',
  };
  
  const passwordLengthMessage = {
    message: '"password" length must be 6 characters long',
  };
  
  const passwordIsRequiredMessage = {
    message: '"password" is required',
  };
  
  const emptyEmailMessage = {
      message: '"email" is not allowed to be empty',
  };
  
  const nameCategRequired = {
    message: '"name" is required',
  };

  const emptyPasswordMessage = {
      message: '"password" is not allowed to be empty',
  };

  const messageCatNotFound = {
    message: '"categoryIds" not found',
};

  const validateDisplayName = (req, res, next) => {
    const { displayName } = req.body;
  if (!displayName || displayName.length < 8) return res.status(400).json(displayNameLength);
  next();
  };
   
  const validateEmailRegex = (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  if (!email) return res.status(400).json(emailIsRequireMessage);
  if (re.test(email) === false) {
      return res.status(400).json(emailMessage);
  }
  next();
  };
  
  const validatePassword = (req, res, next) => {
    const { password } = req.body;
  if (!password) return res.status(400).json(passwordIsRequiredMessage);
  if (password.length !== 6) return res.status(400).json(passwordLengthMessage);
  next();
  };
  
  const validateEmptyFields = (req, res, next) => {
      const { email, password } = req.body;
      if (email === '') return res.status(400).json(emptyEmailMessage);
      if (password === '') return res.status(400).json(emptyPasswordMessage);
      next();
      };
      const nameCategory = (req, res, next) => {
        const { name } = req.body;
        if (!name) return res.status(400).json(nameCategRequired);
       
        next();
        };

        const validatePost = (req, res, next) => {
          const { title, content, categoryIds } = req.body;
          if (!title) return res.status(400).json({ message: '"title" is required' });
          if (!content) return res.status(400).json({ message: '"content" is required' });
          if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });

          next();
          };

          const searchIdCategory = async (req, res, next) => {
            const { categoryIds } = req.body;
            const a = await Category.findAll({
                  where: {
                    id: {
                      [Op.in]: categoryIds,
                    },
                  },
                });

                if (a.length < categoryIds.length) {
                  return res.status(400).json(messageCatNotFound);
                }
                next();
          };

        //   const validateCategory = async (categoryIds) => Promise.all(
        //     categoryIds.map(
        //       async (categoryId) => {
        //         const category = await Category.findOne({ where: { id: categoryId } });
        //         if (!category) throw errorHandling(badRequest, categoryIdsNotFound);
        // },
        //     ),
        //   ); //outro jeito de fazer a busca dos categoryIds
  
  module.exports = { 
     validatePassword,
     validateEmailRegex,
     validateDisplayName,
     validateEmptyFields,
     nameCategory,
     validatePost,
     searchIdCategory,
  
  };
