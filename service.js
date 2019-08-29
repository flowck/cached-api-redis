const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const redis = require("./caching/redis");

const service = express();

redis.connect();

// Middlewares
service.use(cors());
service.use(morgan({ format: "combined" }))

const PORT = process.env.PORT || 4040;
service.listen(PORT, () => {
  console.log("Server is up and running");
});