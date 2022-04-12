const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const authValidation = require('./middlewares/authMiddleware');
const express = require('express');

const router = express.Router();

router.post('/api/session', sessionController.createSession);
router.post('/api/user', userController.createUser);

router.use(authValidation);

router.get('/api/user', userController.getAllUsers);
router.get('/api/user/:id', userController.getUser);
router.delete('/api/user/:id', userController.deleteUser);
router.put('/api/user/:id', userController.updateUser);

module.exports = router;