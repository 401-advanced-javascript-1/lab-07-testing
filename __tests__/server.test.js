'use strict';

const supertest = require('supertest');

// What's up with the {}???? deconstructoring const server = export server
const {server} = require('../server.js');
const mockClient = supertest(server);
let next = () => {};
let req = () => {};
let res = () => {status: '500', send: 'Error'};

describe('The Server', () => {
  it('responds with a 200 on a good route', () => {
    // Why do we return here?
    return mockClient.get('/a')
      .then( result => {
        expect(result.status).toEqual(200);
      });
  });

  it('responds with a 500 on an error', () => {
    return mockClient.get('/e')
      .then( result => {
        expect(result.status).toEqual(500);
      });
  });

  it('responds with a 404 on an unknown route', () => {
    return mockClient.get('/x')
      .then( result => {
        expect(result.status).toEqual(404);
      });
  });
});

// describe('The middleware', () => {
//   it('Correctly handles a request', () => {
//     return mockClient.get('/e', )
//     expect()
//   });
});