const userDAO = require('../dao/userDao');
const authService = require('./authService');


/*" 
    "email":
    "password"
    "firstName"
    "lastName"

"*/

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
        const { id } = user;
        return userDAO.getUser(id);
    }

    deleteUser(user) {
        const { id } = user;
        return userDAO.deleteUser(id);
    }

    updateUser(user, personDto) {
        const { id } = user;
        const { firstName, lastName, email } = personDto;
        return userDAO.updateUser(id, firstName, lastName, email);
    }
}

module.exports = new UserService();