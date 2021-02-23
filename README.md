# PubSub Server

A PubSub API using expressjs + typescript + docker.

## Features

- Create subscription to topics.
- Publish messages to topics subscribers.

## Technologies

- [Express.js](https://expressjs.com/) as the web framework.
- Linting with [ESlint](https://github.com/eslint/eslint/).
- Testing with [Mocha](https://mochajs.org/).
- Testing with [Chai](https://www.chaijs.com/).
- Containerize with [Docker](https://www.docker.com/).

## Getting started

```sh
# Clone the project
git clone https://github.com/sauban/pubsub-server.git
cd pubsub-server

# Install dependencies
yarn install

# Copy .env.example file
cp .env.example .env

```

Set Environment Variables

```sh
MONGODB_URL=<mongodburl>
PORT=9094
```

Then you can start the application:

```sh
npm start
```

This will launch the server [node](https://nodejs.org/en/) process on port 9094

### Subscribing

To create subscription for topics

- API Endpoint

```sh

  <BASE_URL>/subscribe/:topic

```

- Request Payload

```sh
  POST /subscribe/topic1
  {
    "url": "http://localhost:3000/test1"
  }
```

This should return a response as shown below:

```sh
{
  "url": "http://localhost:3000/test1"
}
```

### Publishing

To publish messages under topic to subscribers

- API Endpoint

```sh

  <BASE_URL>/publish/:topic

```

- Request Payload

```sh
  POST /publish/topic1
  {
    "message": "Hello world"
  }
```

This should return the payload as shown below:

```sh
{
  "topic": "topic1",
  "data": {
    "message": "Hello world"
  }
}
```

### Use Shell script

Run below to start the pubsub server and the subscriber server

```sh
  chmod +x ./start-server.sh
  ./start-server.sh
```

Open a new terminal and run the following:

```sh
  curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:4043/hello"}' http://localhost:9009/subscribe/topic1
  curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:4043/hello2"}' http://localhost:9009/subscribe/topic1
  curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:9009/publish/topic1
```