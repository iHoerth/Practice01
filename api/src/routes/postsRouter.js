const { Router } = require('express');
const { fetchAllPosts } = require('../handlers/posts/fetchAllPosts');
const { fetchPostById } = require('../handlers/posts/fetchPostById');
const { createPost } = require('../handlers/posts/createPost');

const postsRouter = Router();

postsRouter.get('/:id', fetchPostById);
postsRouter.get('/', fetchAllPosts);

postsRouter.post('/create', createPost);

module.exports = postsRouter;
