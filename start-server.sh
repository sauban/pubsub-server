#!/bin/sh

# Install node modules
npm install;

# Start Pubsub server
./node_modules/.bin/npm-run-all -p start start:subscriber;

