const { create, findPosts, findPostById } = require('../services/postService');

const createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body; // ao invés dessa linha posso só dar um rest, no req.body
        const { id: userId } = req.user;
        // const post = { ...req.body, userId };
        const newPost = { userId, title, content };
     const post = await create(newPost);
     const { id } = post; 
       return res.status(201).json({ id, ...newPost });
    } catch (err) {
        next(err);
    }
  }; 

  const getAllBlogPosts = async (_req, res, next) => {
    try {
     const allPosts = await findPosts();
       return res.status(200).json(allPosts);
    } catch (err) {
        next(err);
    }
  }; 

  const getPostsById = async (req, res, next) => {
    try {
      const { id } = req.params;

     const post = await findPostById(id);
      if (post.message) return res.status(404).json({ message: post.message });
      // if (post.message) return res.status(404).json(post);

       return res.status(200).json(post);
    } catch (err) {
        next(err);
    }
  }; 
  module.exports = { createPost, getAllBlogPosts, getPostsById };
