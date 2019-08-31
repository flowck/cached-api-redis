# Cached API - Redis

## Goals

Implement a minimal API with a caching layer powered by Redis in a containerized environment.

* Reduce database hits
* Reduce response time
* Fault tolerant: It handle gracefully connection errors with the caching layer.

## How to setup and run in development mode

1 - Clone the repo:

``` git clone git@github.com:flowck/cached-api-redis.git ```

2 - Navigate into the project folder

``` cd cached-api-redis ```

3 - Install node packages

``` npm install ```

4 - Install redis images. Note, need docker installed in your machine.

``` npm run setup:redis ```

5 - Run the caching layer:

``` npm run layer:redis ```

6 - Run the api service

``` npm run dev ```

## Run it with docker-compose

[to be written]

## License

Under the MIT license 
