module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.STRING, foreignKey: true },
    }, {
      createdAt: 'published',
      updatedAt: 'updated',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'user' },
    );
  };
  return BlogPost;
};
