const jwt = require('jsonwebtoken');
const JsonWebTokenError = require('jsonwebtoken/lib/JsonWebTokenError');
const authService = require('./authService');
const authConfig = require('./../config/authConfig');
const userDAO = require('../dao/userDao');



class SessionService {
    createSession(acess_data) {
        const { email, password } = acess_data;

        const user = userDAO.getUserByEmail(email);

        if (!user.length) {
            return { error: 'User not found' };
        }


    }


}

module.exports = new SessionService();