const sessionService = require('./../services/authService');

class SessionController {
    async createSession(req, res) {
        try {
            const login = await sessionService.createSession(req.body);
            return
        } catch (err) {
            console.error(err);
            console.error({ error: 'Internal service error!' })
        }

    }
}

module.exports = new SessionController();