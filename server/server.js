'use strict';

const path = require('path');
const express = require('express');
const jsonServer = require('json-server');

const server = jsonServer.create();

const v1Router = jsonServer.router('db-v1.json');
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, '../dist')
});

server.use(middlewares);
server.use('/api/v1', v1Router);

server.listen(3000, () => {
  console.log('JSON Server is running')
});
