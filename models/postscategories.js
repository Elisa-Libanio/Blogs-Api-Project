module.exports = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define(
    'PostsCategory', {}, { timestamps: false },
  );

  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postsCategory;
};
