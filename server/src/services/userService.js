const userDAO = require('../dao/userDao');
const authService = require('./authService');


/*" 
    "email":
    "password"
    "firstName"
    "lastName"

"*/

class UserService {
    createUser(personDto) {
        const { email, password, firstName, lastName } = personDto;
        const user = userDAO.getUserByEmail(email);

        user
            .then(res => {
                if (!res) {
                    var encryptedPassword = authService.createPasswordHash(password);
                    encryptedPassword
                        .then(newPassword => {
                            const new_user = userDAO.createUser(email, newPassword, firstName, lastName);
                            new_user.then(res => {
                                return res
                            });
                        });


                } else {
                    console.log('ja existe');
                    return false
                }
            });



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