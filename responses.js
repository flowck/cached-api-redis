/**
 * responses.js: Routes and controllers will be handled here
*/

const router = require("express").Router();
const fs = require("fs");
const join = require("path").join;
const redis = require("./caching/redis");

/**
 * Get all sensors
*/
router.get("/sensors", (req, res) => {
  // Read the 9mb on each request
  // as you can see, we want to blow this app up
  console.log("Loading the file: ", new Date());
  fs.readFile(join(__dirname, "/data/data.json"), "utf8", (err, data) => {
    console.log("Endend loading the file: ", new Date());
    if (err) {
      console.error(err);
      res.status(500).json({
        message: "Something went wrong"
      });
    } else {
      // Cache data
      const cacheId = req.originalUrl;
      redis.client.setex(cacheId, 1800, JSON.stringify(data));
      res.json(data);
    }
  });
});

/**
 * Get a single sensor 
*/
router.get("/sensors/:id", (req, res) => {

  // Read the 9mb on each request
  // as you can see, we want to blow this app up
  console.log("Loading the file: ", new Date());
  fs.readFile(join(__dirname, "/data/data.json"), "utf8", (err, data) => {
    console.log("Endend loading the file: ", new Date());
    if (err) {
      console.error(err);
      res.status(500).json({
        message: "Something went wrong"
      });
    } else {
      res.json(JSON.parse(data)[req.params.id]);
    }
  });
});


// Export the router object
module.exports = router;