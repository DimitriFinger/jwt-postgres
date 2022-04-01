const jwt = require('jsonwebtoken');
const util = require('util');
require('dotenv');

module.exports =
    async (req, res, next) => {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res
                .status(401)
                .json({ error: 'Token was no provided.' });
        }

        const [, token] = authHeader.split(' ');


        try {
            const decoded = await util.promisify(jwt.verify)(token, process.env.JWT_SECRET);
            req.userId = decoded.id;

            return next();
        } catch (err) {
            console.log(err);
            return res
                .status(401)
                .json({ error: 'Invalid token.' })
        }

    }
