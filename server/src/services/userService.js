const userDAO = require('../dao/userDao');
const authService = require('./authService');


class UserService {
    async createUser(personDto) {
        const { email, password, firstName, lastName } = personDto;
        const user = await userDAO.getUserByEmail(email);

        if (user) {
            return { message: `User ${email} already exists.` }
        }

        if (!user) {
            var encryptedPassword = await authService.createPasswordHash(password);
            return userDAO.createUser(email, encryptedPassword, firstName, lastName);
        }
    }

    getAllUsers() {
        return userDAO.getAllUsers();
    }

    getUser(user) {
        return userDAO.getUser(user.id);
    }

    deleteUser(user) {
        return userDAO.deleteUser(user.id);
    }

    updateUser(user, personDto) {
        const { firstName, lastName, email } = personDto;
        return userDAO.updateUser(user.id, firstName, lastName, email);
    }
}

module.exports = new UserService();