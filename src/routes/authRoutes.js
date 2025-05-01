const express = require("express");
const router = express.Router();
const { validationRegister, validationLogin } = require('../middlewares/validationMiddleware');
const authController = require('../controllers/authController');


router.post('/register', validationRegister, authController.register);
router.post('/login', validationLogin, authController.login);

module.exports = router;