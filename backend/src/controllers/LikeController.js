const Dev = require('../models/Dev');
module.exports = {
  async store (req, res) {
    const { devId } = req.params;
    const { user } = req.headers;
    const loggedUser = await Dev.findById(user);
    const targetUser = await Dev.findById(devId);
    if (!targetUser) {
      return res.status(400).json({ error: 'Dev not exists' });
    }
    loggedUser.likes.push(targetUser._id);
    await loggedUser.save();
    return res.json(loggedUser);
  }
};
