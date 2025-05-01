const likeService = require('../services/likeService');


exports.likePost = async(req, res) => {
    try {
        const postID = req.params.id;
        const result = await likeService.likePost(req.db, req.username, postID);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' })
    }
}


exports.unlikePost = async(req, res) => {
    try {
        const postID = req.params.id;
        const result = await likeService.unlikePost(req.db, req.username, postID);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}