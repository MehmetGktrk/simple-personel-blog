const { body, param, validationResult } = require("express-validator");


function checkValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ code: 400, message: errors.array()[0].msg });
    }
    next();
}

exports.validationRegister = [
    body('username').notEmpty().withMessage('Username cannot be empty.'),
    body('username').isString().withMessage('Username must be a string.'),
    body('username').isLength({ min: 4, max: 20 }).withMessage('Username must be between 4 and 20 characters long.'),

    body('email').notEmpty().withMessage('Email cannot be empty.'),
    body('email').isString().withMessage('Email must be a string.'),
    body('email').isLength({ min: 11 }).withMessage('Email must be greater than 11 characters long.'),
    body('email').isEmail().withMessage('Please enter a valid email.'),


    body('password').notEmpty().withMessage('Password cannot be empty.'),
    body('password').isString().withMessage('Password must be a string.'),
    body('password').isLength({ min: 6, max: 25 }).withMessage('Username must be between 6 and 25 characters long.'),

    checkValidationResult
]


exports.validationLogin = [
    body('emailOrUsername').notEmpty().withMessage('Username cannot be empty.'),
    body('emailOrUsername').isString().withMessage('Username must be a string.'),
    body('emailOrUsername').isLength({ min: 11, max: 30 }).withMessage('Username must be between 11 and 30 characters long.'),

   
    body('password').notEmpty().withMessage('Password cannot be empty.'),
    body('password').isString().withMessage('Password must be a string.'),
    body('password').isLength({ min: 6, max: 25 }).withMessage('Username must be between 6 and 25 characters long.'),

    checkValidationResult
]


exports.validationFollow = [
    param('id').notEmpty().withMessage('Selected User cannot be empty'),
    param('id').isString().withMessage('Selected User must be a string.'),

    checkValidationResult
]


exports.validationUnfollow = [
    param('id').notEmpty().withMessage('Selected User cannot be empty'),
    param('id').isString().withMessage('Selected User must be a string.'),

    checkValidationResult
]



exports.validationLikePost = [
    param('id').notEmpty().withMessage('postID cannot be empty'),
    param('id').isString().withMessage('postID must be a string.'),

    checkValidationResult
]

exports.validationUnlikePost = [
    param('id').notEmpty().withMessage('postID cannot be empty'),
    param('id').isString().withMessage('postID must be a string.'),

    checkValidationResult
]



exports.validationCreatePost = [
    body('title').notEmpty().withMessage('Title cannot be empty'),
    body('title').isString().withMessage('Title must be a string'),

    body('content').notEmpty().withMessage('Content cannot be empty'),
    body('content').isString().withMessage('Content must be a string'),

    checkValidationResult
]

exports.validationUpdatePost = [
    param('id').notEmpty().withMessage('PostID cannot be empty'),

    body('title').notEmpty().withMessage('Title cannot be empty'),
    body('title').isString().withMessage('Title must be a string'),

    body('content').notEmpty().withMessage('Content cannot be empty'),
    body('content').isString().withMessage('Content must be a string'),

    checkValidationResult
]

exports.validationDeletePost = [
    param('id').notEmpty().withMessage('PostID cannot be empty'),
    
    checkValidationResult
]

exports.validationGetPost = [
    param('id').notEmpty().withMessage('PostID cannot be empty'),
    
    checkValidationResult
]



exports.validationGetProfile = [
    param('id').notEmpty().withMessage('PostID cannot be empty'),
    
    checkValidationResult
] 