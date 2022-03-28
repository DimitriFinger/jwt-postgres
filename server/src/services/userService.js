const userDAO = require('../dao/userDao');

class UserService {
    createUser(personDto) {
        const { firstName, lastName, email } = personDto;
        return userDAO.createUser(firstName, lastName, email);
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