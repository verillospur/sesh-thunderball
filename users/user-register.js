// 
//  user-register.js
//  ~/users/
// 
//  created:    07/01/2021
// 
//  user store
// 
'use strict';

const createUser = require('./createUser');

const findUser = require('./findUser');
const loadAllUsers = require('./loadAllUsers');

module.exports = {
  createUser: createUser,
  findUser: findUser,
  loadAllUsers: loadAllUsers,
};
