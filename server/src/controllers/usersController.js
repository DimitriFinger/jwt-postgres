const userService = require('../services/userService');



// class UserController {
//     async createUser(req, res) {
//         try {
//             console.log('requisição do body');
//             console.log(req.body);
//             const [id] = await userService.createUser(req.body);
//             res.status(201).json(id);
//         } catch (err) {
//             console.error('Something when wrong!');
//         }
//     }
// }


class UserController {
    async createUser(req, res) {
        try {
            const id = await userService.createUser(req.body);
            res.status(201).json(id);
        } catch (err) {
            console.error(err);
        }
    }
}


module.exports = new UserController();