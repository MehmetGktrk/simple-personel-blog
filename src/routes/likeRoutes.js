const express = require("express");
const router = express.Router();
const likeController = require('../controllers/likeController');


router.post('/likePost/:id', likeController.likePost);
router.post('/unlikePost/:id', likeController.unlikePost);

module.exports = router;