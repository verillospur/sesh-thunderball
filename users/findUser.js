// 
//  findUser.js
//  ~/users/
// 
//  created:    07/01/2021
// 
//  user find function for user-register.js
// 
'use strict';

const config = require('../config');
const errorhandler = require('../errorhandler');
const log = require('../log');

const findUser = (userDefQuery) => {
  const lg = msg => { log.log(`findUser(): ${msg}`); };

  const storage = require('../data');
  storage.find()

  
};

module.exports = findUser;
