const { Router } = require('express');
const { fetchAllUsers } = require('../handlers/users/fetchAllUsers');
const { fetchUserById } = require('../handlers/users/fetchUserById');
const { loginUser } = require('../handlers/users/loginUser');
const { postUser } = require('../handlers/users/postUser');

const usersRouter = Router();

usersRouter.get('/:id', fetchUserById);
usersRouter.get('/', fetchAllUsers);

usersRouter.post('/', loginUser);
usersRouter.post('/create', postUser);

module.exports = usersRouter;
