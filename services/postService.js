const { BlogPost, User, Category } = require('../models');

const create = async (post) => {
    const { title, content, categoryIds, userId } = post;
    const published = new Date();
    const updated = new Date();
  
    const newBlogPost = await BlogPost
      .create({ title, content, categoryIds, userId, published, updated });
  
    return newBlogPost.dataValues;
  };

const findPosts = async () => {
    const blogPost = await BlogPost.findAll({ 
        include: [{ model: User, as: 'user' }, 
        { model: Category, as: 'categories', through: { attributes: [] } }] });
    return blogPost;
};

const findPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) return { message: 'Post does not exist' };
  return post;
};

module.exports = {
    create,
    findPosts,
    findPostById,
    
};
