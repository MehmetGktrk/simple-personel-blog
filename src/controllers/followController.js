const followService = require('../services/followService');

exports.follow = async(req, res) => {
    try {
        const selectedUser = req.params.id;
        const result = await followService.follow(req.db, req.username, selectedUser);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}


exports.unfollow = async(req, res) => {
    try {
        const selectedUser = req.params.id;
        const result = await followService.unfollow(req.db, req.username, selectedUser);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}