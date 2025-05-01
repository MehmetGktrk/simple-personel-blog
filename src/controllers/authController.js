const authService = require('../services/authService')

exports.register = async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const result = await authService.register(req.db, username, email, password);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}

exports.login = async(req, res) => {
    try {
        const { emailOrUsername, password } = req.body;
        const result = await authService.login(req.db, emailOrUsername, password);
        return res.status(result.code).json({ code: result.code, message: result.message, token: result.token })
    } catch (err) {
        
    }
}