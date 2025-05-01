const { ObjectId } = require("mongodb");

exports.likePost = async(db, username, postID) => {
    const postCollection = db.collection('Posts');
    const userCollection = db.collection('Users');


    if(!ObjectId.isValid(postID)){
        return { code: 400, message: 'Invalid post id.' };
    }

    const post = await postCollection.findOne({ _id: new ObjectId(postID) });
    const user = await userCollection.findOne({ username: username })

    if(!post){
        return { code: 400, message: 'Post not found' };
    }

    if(!user){
        return { code: 400, message: 'User not fond' };
    }

    const isLiked = await userCollection.findOne({ username: username, likedPosts: postID });


    if(isLiked){
        return { code: 400, message: 'You have already liked this post.' };
    }

    const pushLikedArray = await userCollection.updateOne({ username: username }, {
        $push: {
            likedPosts: postID
        }
    });

    const updateLikeCounter = await postCollection.updateOne({ _id: new ObjectId(postID) }, {
        $inc:{
            likes: +1
        }
    });


    return { code: 200, message: 'Post liked.' };

}


exports.unlikePost = async(db, username, postID) => {
    const postCollection = db.collection('Posts');
    const userCollection = db.collection('Users');

    if(!ObjectId.isValid(postID)){
        return { code: 400, message: 'Invalid post id.' };
    }

    const post = await postCollection.findOne({ _id: new ObjectId(postID) });
    const user = await userCollection.findOne({ username: username });

    if(!post){
        return { code: 400, message: 'Post not found.' };
    }

    if(!user){
        return { code: 400, message: 'User not found.' };
    }

    const checkLike = await userCollection.findOne({ username: username, likedPosts: postID });

    if(!checkLike){
        return { code: 400, message: 'The user hasnt liked this post yet.' };
    }

    const deleteLike = await userCollection.updateOne({ username: username }, {
        $pull: {
            likedPosts: postID
        }
    })

    const updateLikeCounter = await postCollection.updateOne({ _id: new ObjectId(postID) }, {
        $inc:{
            likes: -1
        }
    })

    return { code: 200, message: 'Post Unliked.' };

}