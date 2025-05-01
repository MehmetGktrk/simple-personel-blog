const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../config/config');
const settings = require('../settings/settings');



exports.register = async(db, username, email, password) => {
    const userCollection = db.collection('Users');

    const user = await userCollection.findOne({ 
        $or: [
            { username: username },
            { email: email }
        ]
    });

    if(user){
        return { code: 404, message: 'This email address or username is already in use.' }
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const now = new Date();

    const newUser = {
        username: username,
        email: email,
        password: hashedPassword,
        likedPosts: [],
        createdAt: now
    }

    const insertUser = await userCollection.insertOne(newUser)

    return { code: 200, message: 'User registered.' }
    
}

exports.login = async(db, emailOrUsername, password) => {
    const userCollection = db.collection('Users');

    const user = await userCollection.findOne({
        $or: [
            { username: emailOrUsername },
            { email: emailOrUsername }
        ]
    })

    if(!user){
        return { code: 401, message: 'User not found.' }
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return { code: 400, message: 'Invalid password.' };
    }

    const token = jwt.sign(
        { username: user.username },
        config.jwtSecret,
        { expiresIn: settings.jwtExpire }
    )


    return { code: 200, message: 'Login successful.', token: token }

}