const redis = require("redis");

const client = redis.createClient({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 5050 
});

module.exports.connect = () => {
  // Throw an error if the application fails to
  // connect to the redis server
  client.on("error", (err) => {
    throw err;
  });

  // Once connected to REDIS
  client.on("connect", () => {
    console.log("Connected to the redis server");
  });
};

// Export the client object
module.exports.client = client;