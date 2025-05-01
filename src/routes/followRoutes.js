const express = require("express");
const router = express.Router();
const { validationFollow, validationUnfollow } = require('../middlewares/validationMiddleware');
const followController = require('../controllers/followController');
console.log("routes")
router.post('/follow/:id', validationFollow, followController.follow);
router.post('/unfollow/:id', validationUnfollow, followController.unfollow);

module.exports = router;