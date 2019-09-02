const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const redis = require("./caching/redis");
const responses = require("./responses");
const compression = require("compression");
const caching = require("./middlewares/caching");

/**
 * Init the service
*/
const service = express();
redis.connect();

// Middlewares
service.use(cors());
service.use(morgan({ format: "tiny" }));
service.use(compression());
service.use(caching);
service.use(responses);

const PORT = process.env.PORT || 4040;
service.listen(PORT, () => {
  console.log("Server is up and running");
});