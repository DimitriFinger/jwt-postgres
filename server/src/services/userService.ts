import userDAO from '../dao/userDao';

class UserService {
    createPerson(personDto) {
        const { firstName, lastName, email } = personDto;
        return userDAO.createUser(firstName, lastName, email);

    }

}

export default new UserService();