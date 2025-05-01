const express = require("express");
const router = express.Router();
const { validationCreatePost, validationUpdatePost, validationDeletePost, validationGetPost } = require('../middlewares/validationMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')
const postController = require('../controllers/postController');


router.post('/createPost', authMiddleware, validationCreatePost, postController.createPost);
router.put('/updatePost/:id', authMiddleware, validationUpdatePost, postController.updatePost);
router.delete('/deletePost/:id', authMiddleware, validationDeletePost, postController.deletePost);
router.get('/getPost/:id', validationGetPost, postController.getPost);

module.exports = router