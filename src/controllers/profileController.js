const profileService = require('../services/profileService');

exports.getProfile = async(req, res) => {
    try {
        const profileName = req.params.id;
        const result = await profileService.getProfile(req.db, profileName);
        return res.status(result.code).json({ code: result.code, message: result.message, profileData: result.profileData });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ code: 500, message: 'An Unexpected Error Occurred' });
    }
}