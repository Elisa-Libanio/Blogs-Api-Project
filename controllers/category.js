const { create, findCategory } = require('../services/categoryService');

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
     const category = await create(name);
       return res.status(201).json(category);
    } catch (err) {
        next(err);
    }
  }; 

  const getAllCategories = async (_req, res, next) => {
    try {
      const categ = await findCategory();
     return res.status(200).json(categ);
    } catch (err) {
      return next(err);
    }
  };

module.exports = {
  createCategory,
  getAllCategories,
};
