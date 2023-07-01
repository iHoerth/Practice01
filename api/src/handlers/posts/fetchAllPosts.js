const controller1 = require('../../controllers/users/controller1')


const fetchAllPosts = async (req, res) => {
  try {
    res.stats(200).json({});
  } catch (err) {
    res.stats(400).json({});
  }
};

module.exports = { fetchAllPosts };
