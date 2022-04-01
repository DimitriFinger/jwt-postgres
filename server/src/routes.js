const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const authValidation = require('./middlewares/authMiddleware');
const express = require('express');

const router = express.Router();

router.post('/session', sessionController.createSession);

router.use(authValidation);

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/:id', userController.updateUser);

module.exports = router;