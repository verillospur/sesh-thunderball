// 
//  id-register.js 
//  ~/users/ 
// 
//  created:    05/01/2021 
// 
//  register for user ids -> telegram ids
// 
'use strict';

const loadByTgUsername = require('./loadRegistrationByTgUsername')
const loadByTgUserId = require('./loadRegistrationByTgUserId');
const loadByUserId = require('./loadRegistrationByUserId');
const loadAll = require('./loadAllRegistrations')

const registerUser = require('./registerUser');

module.exports = {
  register: registerUser,

  loadByTelegramUsername: loadByTgUsername, 
  loadByTelegramUserId: loadByTgUserId, 
  loadByUserId: loadByUserId,
  loadAll: loadAll,
}
