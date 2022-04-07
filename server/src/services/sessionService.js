const jwt = require('jsonwebtoken');
const authService = require('./authService');
const userDAO = require('../dao/userDao');
require('dotenv');



class SessionService {
    async createSession(acess_data) {
        const { email, password } = acess_data;

        const user = await userDAO.getUserByEmail(email);
        if (!user) {
            return { error: 'Invalid email / password.' };
        }

        const passwordCheck = await authService.checkPassword(user[0], password);

        if (!passwordCheck) {
            return { error: 'Invalid email / password.' }
        }

        const { id } = user[0];

        return {
            user: {
                id,
                email
            },
            token: jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.SESSION_EXPIRES })
        };



    }


}

module.exports = new SessionService();