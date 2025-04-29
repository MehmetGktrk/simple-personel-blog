const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const postController = require('../controllers/postController');


router.post('/createPost', authMiddleware, postController.createPost);
router.put('/updatePost/:id', authMiddleware, postController.updatePost);
router.delete('/deletePost/:id', authMiddleware, postController.deletePost);
router.get('/getPost/:id', postController.getPost);

module.exports = router