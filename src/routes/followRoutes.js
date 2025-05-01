const express = require("express");
const router = express.Router();
const followController = require('../controllers/followController');
console.log("routes")
router.post('/follow/:id', followController.follow);
router.post('/unfollow/:id', followController.unfollow);

module.exports = router;