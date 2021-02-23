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
docker-compose up --build
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
