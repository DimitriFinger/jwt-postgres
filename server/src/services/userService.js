const userDAO = require('../dao/userDao');

class UserService {
    createUser(personDto) {
        console.log('personDto', personDto)
        const { firstName, lastName, email } = personDto;
        console.log(firstName + ' ' + lastName + ' ' + email);
        return userDAO.createUser(firstName, lastName, email);

    }

}

module.exports = new UserService();