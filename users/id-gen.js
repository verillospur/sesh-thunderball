// 
//  id-gen.js 
//  ~/path/ 
// 
//  created:    01/01/2021 
// 
//  id generator for new users
// 
'use strict';

const config = require('../config/config');

const getNewId = () => {
  
  const gen = require('../framework/id-generator');
  
  const prefix = config.users.userIdPrefix;
  const suffix = config.users.userIdSuffix;  
  
  const newId = prefix + gen.generate() + suffix;

  return newId;
};

module.exports = {
  get: getNewId
}


