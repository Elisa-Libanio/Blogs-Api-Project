const { Router } = require('express');
const { createUser, findAllUsers, findUserById } = require('../controllers/user');
const { createLogin } = require('../controllers/login');
const { createCategory, getAllCategories } = require('../controllers/category');
const { createPost, getAllBlogPosts, getPostsById } = require('../controllers/post');
const { validateDisplayName, validateEmailRegex,
    validatePassword, validateEmptyFields, nameCategory,
    validatePost, searchIdCategory } = require('../middlewares/validations');
const { auth } = require('../middlewares/auth');

const router = Router();
router.post('/user', validateDisplayName, validateEmailRegex,
validatePassword, validateEmptyFields, createUser);
router.post('/login', validateEmptyFields, validateEmailRegex, validatePassword, createLogin);
router.get('/user', auth, findAllUsers);
router.get('/user/:id', auth, findUserById);
router.post('/categories', auth, nameCategory, createCategory);
router.get('/categories', auth, getAllCategories);
router.post('/post', auth, validatePost, searchIdCategory, createPost);
router.get('/post', auth, getAllBlogPosts);
router.get('/post/:id', auth, getPostsById);
module.exports = router;
