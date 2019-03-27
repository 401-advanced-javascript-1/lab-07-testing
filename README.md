# JS401 - Lab-07-Testing
This lab demonstrates how to test a simple server and associated middleware.

## Author: Cory Henderson

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-07-testing)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-07-testing)

## Documentation

# Modules
- server.js
- server.test.js

# Setup

## Running the app
- npm test will run the jest test package for the application.

## Tests
- Tests check that proper status codes are returned for various paths.
- Tests utilize mock unit testing to check middleware for req, res, and next. A spy is set on the next parameter to ensure proper callback.

## UML