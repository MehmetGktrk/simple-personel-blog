const express = require("express");
const router = express.Router();
const { validationGetProfile } = require('../middlewares/validationMiddleware');
const profileController = require('../controllers/profileController');

router.get('/getProfile/:id', validationGetProfile, profileController.getProfile);

module.exports = router;