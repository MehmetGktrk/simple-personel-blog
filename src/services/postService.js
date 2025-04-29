const { ObjectId } = require("mongodb");

exports.createPost = async(db, username, title, content ) => {
    const postCollection = db.collection('Posts');

    const now = new Date();

    const newPost = {
        title: title,
        content: content,
        author: username,
        createdAt: now,
        updatedAt: null
    }

    const insertPost = await postCollection.insertOne(newPost);

    return { code: 200, message: 'Post published.' }
}


exports.updatePost = async(db, username, title, content, postID) => {
    const postCollection = db.collection('Posts');

    if(!ObjectId.isValid(postID)){
        return { code: 400, message: 'Invalid post id.' };
    }

    const post = await postCollection.findOne({ _id: new ObjectId(postID), author: username });

    if(!post){
        return { code: 400, message: 'Post not found.' };
    }

    if(username != post.author){
        return { code: 400, message: 'Only the author can update this post.' };
    }

    const now = new Date();

    const updatePost = await postCollection.updateOne({ _id: new ObjectId(postID), author: username }, {
        $set: {
            title: title,
            content: content,
            updatedAt: now
        }
    })

    return { code: 200, message: 'Post updated.' }
}


exports.deletePost = async(db, username, postID) => {
    const postCollection = db.collection('Posts');

    
    if(!ObjectId.isValid(postID)){
        return { code: 400, message: 'Invalid post id.' };
    }

    const post = await postCollection.findOne({ _id: new ObjectId(postID), author: username });

    if(!post){
        return { code: 400, message: 'Post not found.' }; 
    }

    if(username != post.author){
        return { code: 400, message: 'Only the author can delete this post.' };
    }

    const deletePost = await postCollection.deleteOne({ _id: new ObjectId(postID) });

    return { code: 200, message: 'Post deleted.' };
}


exports.getPost = async(db, postID) => {
    const postCollection = db.collection('Posts');

    if(!ObjectId.isValid(postID)){
        return { code: 400, message: 'Invalid post id.' };
    }

    const post = await postCollection.findOne({ _id: new ObjectId(postID) })

    if(!post){
        return { code: 400, message: 'Post not found' };
    }

    return { code: 200, message: 'Successful', post: post };
}
