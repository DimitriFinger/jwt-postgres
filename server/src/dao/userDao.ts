const db = require('../database');

class UserDAO {
    async createUser(firstName: string, lastName: string, email: string) {
        const [id] = await db('users').insert({
            email,
            first_name: firstName,
            last_name: lastName
        }).returning('id')
    }
}

export default new UserDAO();