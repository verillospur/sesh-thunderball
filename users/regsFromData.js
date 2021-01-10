// 
//  regsFromData.js
//  ~/users/
// 
//  created:    2021-01-10
// 
//  Helper to create user registration objects from data records
//  
// 
'use strict';

const log = require('../log');

const fromDataArray = (records) => {
  const lg = msg => { log.log(`regsFromData.fromDataArray(): ${msg}`); };
  
  const rv = [];

  if (records && Array.isArray(records)) {
    lg(`Converting ${records.length} data record(s).`);

    // iterate records
    records.forEach(
      rec => {
        // generate new user
        const gen = require('./idRegistration-def');
        const reg = gen.get();

        // populate from data
        reg.telegramUsername = rec.telegramUsername;
        reg.telegramUserId = rec.telegramUserId;
        reg.registrationDate = rec.registrationDate;
        reg.userId = rec.userId;

        // add user object to return array
        rv.push(reg);
      }
    );
  }

  else {
    lg('No data records specified.');
  }

  // return array of objects
  return rv;
};

module.exports = {
  fromDataArray: fromDataArray
}
