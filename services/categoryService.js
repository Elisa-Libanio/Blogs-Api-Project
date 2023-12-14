const { Category } = require('../models');

const create = async (name) => {
      const newCategory = await Category.create({ name });
      return newCategory;
  };
  
  const findCategory = async () => {
    const allCat = await Category.findAll();
  
    return allCat;
  };

  module.exports = {
    create,
    findCategory,
  };
