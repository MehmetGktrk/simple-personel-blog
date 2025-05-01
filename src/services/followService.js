

exports.follow = async(db, username, selectedUser) => {
    const userCollection = db.collection('Users');

    if(username == selectedUser){
        return { code: 400, message: 'You cant follow yourself.' };
    }

    const checkSelectedUser = await userCollection.findOne({ username: selectedUser });

    if(!checkSelectedUser){
        return { code: 400, message: 'Selected user not found.' };
    }

    const selectedUserFollowers = checkSelectedUser.followers;

    if(selectedUserFollowers.includes(username)){
        return { code: 400, message: 'You are already following this user.' };
    }

    const updateUser = await userCollection.updateOne({ username: username }, {
        $push:{
            follows: selectedUser
        }
    })

    const updateSelectedUser = await userCollection.updateOne({ username: selectedUser }, {
        $push:{
            followers: username
        }
    })

    return { code: 200, message: 'Following User.' };
}

exports.unfollow = async(db, username, selectedUser) => {
    const userCollection = db.collection('Users');

    if(username == selectedUser){
        return { code: 400, message: 'You cant unfollow yourself' };
    }

    const user = await userCollection.findOne({ username: username });
    const checkSelectedUser = await userCollection.findOne({ username: selectedUser });

    if(!checkSelectedUser){
        return { code: 400, message: 'Selected user not found.' };
    }

    const userFollowList = user.follows;

    if(!userFollowList.includes(selectedUser)){
        return { code: 400, message: 'You are not following this user.' };
    }

    const updateUser = await userCollection.updateOne({ username: username }, {
        $pull:{
            follows: selectedUser
        }
    })

    const updateSelectedUser = await userCollection.updateOne({ username: selectedUser }, { 
        $pull:{
            followers: username
        }
    })

    return { code: 200, message: 'Unfollowed' };
}