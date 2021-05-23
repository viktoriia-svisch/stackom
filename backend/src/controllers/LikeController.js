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
    if (targetUser.likes.includes(loggedUser._id)) {
      const loggedSocket = req.connectedUsers[user];
      const targetSocket = req.connectedUsers[targetUser];
      if (loggedUser) {
        req.io.to(loggedUser).emit('match', targetDev);
      }
      if (targetUser) {
        req.io.to(targetUser).emit('match', loggedDev);
      }
    }
    loggedUser.likes.push(targetUser._id);
    await loggedUser.save();
    return res.json(loggedUser);
  }
};
