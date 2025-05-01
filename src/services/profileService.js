const { ObjectId } = require("mongodb");


exports.getProfile = async(db, profileName) => {
    const postCollection = db.collection('Posts');
    const userCollection = db.collection('Users');

    const user = await userCollection.findOne({ username: profileName });

    if(!user){
        return { code: 400, message: 'User not found.' };
    }

    profileData = {}
    const likedPostArray = user.likedPosts;
    const likedPostObjectIds = likedPostArray.map(id => new ObjectId(id));


    const post = await postCollection.find({ author: profileName }).toArray();
    const likedPost = await postCollection.find({ _id: { $in: likedPostObjectIds } }).toArray();

    profileData.posts = post
    profileData.likedPosts = likedPost

    return { code: 200, message: 'Successfull', profileData: profileData }
    
}