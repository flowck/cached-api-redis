const redis = require("../caching/redis");

module.exports = (req, res, next) => {
  redis.client.get(req.originalUrl, (err, reply) => {
    if (err) {
      console.err("Something went wrong with the caching layer: ", err);
      next();
    }

    // Check the content from REDIS
    if (reply === null) {
      next();
    } else {
      // Send the cached data to the client
      res.json(JSON.parse(reply));
    }

  });
}