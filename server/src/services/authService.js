const bcrypt = require('bcryptjs');



class AuthService {
    createPasswordHash(password) {
        return bcrypt.hash(password, 8);
    }

    checkPassword = (user, password) => {
        bcrypt.compare(password, user.password);
    }
}

module.exports = new AuthService();