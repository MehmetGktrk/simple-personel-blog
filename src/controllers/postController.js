const postService = require('../services/postService');


exports.createPost = async(req, res) => {
    try {
        const { title, content } = req.body;
        const result = await postService.createPost(req.db, req.username, title, content);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}


exports.updatePost = async(req, res) => {
    try {
        const postID = req.params.id;
        const { title, content } = req.body;
        const result = await postService.updatePost(req.db, req.username, title, content, postID);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}


exports.deletePost = async(req, res) => {
    try {
        const postID = req.params.id;
        const result = await postService.deletePost(req.db, req.username, postID);
        return res.status(result.code).json({ code: result.code, message: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}


exports.getPost = async(req, res) => {
    try {
        const postID = req.params.id;
        const result = await postService.getPost(req.db, postID);
        return res.status(result.code).json({ code: result.code, message: result.message, post: result.post });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}