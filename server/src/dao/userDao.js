const db = require('../database/index');


// class UserDAO {
//     async createUser(firstName, lastName, email) {

//         console.log(firstName + ' ' + lastName + ' ' + email);
//         const [id] = await db('users')
//         .insert({
//             email: email,
//             first_name: firstName,
//             last_name: lastName
//         }).returning('id');

//         return id;
//     }
// }

class UserDAO {
    async createUser(firstName, lastName, email) {
        const [id] = await db('users')
            .insert({
                email,
                first_name: firstName,
                last_name: lastName,
            })
            .returning('id');

        return id;
    }
}

module.exports = new UserDAO();