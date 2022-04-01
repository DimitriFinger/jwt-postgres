const sessionService = require('./../services/sessionService');

class SessionController {
    async createSession(req, res) {
        try {
            const login = await sessionService.createSession(req.body);
            return res.status(200).json(login);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' })
        }

    }
}

module.exports = new SessionController();