const express = require("express");
const router = express.Router();
const postController = require('../controllers/postController');


router.post('/createPost', postController.createPost);
router.put('/updatePost/:id', postController.updatePost);
router.delete('/deletePost/:id', postController.deletePost);
router.get('/getPost/:id', postController.getPost);

module.exports = router