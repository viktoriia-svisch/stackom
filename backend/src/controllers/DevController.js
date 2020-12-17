const axios = require('axios');
module.exports = {
  async store(req, res) {
    const { username } = req.body;
    const response = await axios.get(`https:
    return res.json(response.data);
  }
};
