#!/bin/bash

cd ../docker
docker run --rm -it -p 5050:6379 redis
