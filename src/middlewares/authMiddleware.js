const jwt = require("jsonwebtoken");
const config = require('../config/config');

async function verifyToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).json({ code: 401, message: 'Unauthorized: Token missing.' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, config.jwtSecret);
        req.username = decoded;
        next()
    } catch (err) {
        return res.status(401).json({ code: 401, message: 'Unauthorized: Invalid token.' });
    }
}

module.exports = verifyToken;