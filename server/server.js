'use strict';

const path = require('path');
const jsonServer = require('json-server');

// Create server.
const server = jsonServer.create();

// Create router.
const v1Router = jsonServer.router('db-v1.json');
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../dist')
});

// Add middlewares
server.use(middlewares);
server.use('/api/v1', v1Router);

// Run server
server.listen(3000, () => {
  console.log('JSON Server is running')
});
