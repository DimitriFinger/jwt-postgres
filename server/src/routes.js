const usersController = require('./controllers/usersController');
const express = require('express');

const router = express.Router();

router.post('/user', usersController.createUser);

module.exports = router;