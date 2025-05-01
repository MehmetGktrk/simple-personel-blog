const express = require("express");
const router = express.Router();
const { validationLikePost, validationUnlikePost } = require('../middlewares/validationMiddleware');
const likeController = require('../controllers/likeController');


router.post('/likePost/:id', validationLikePost, likeController.likePost);
router.post('/unlikePost/:id', validationUnlikePost, likeController.unlikePost);

module.exports = router;