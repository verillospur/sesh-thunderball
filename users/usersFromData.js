// 
//  usersFromData.js
//  ~/users/
// 
//  created:    2021-01-10
// 
//  Helper to create user objects from data records
//  
// 
'use strict';

const log = require('../log');

const fromDataArray = (records) => {
  const lg = msg => { log.log(`usersFromData.fromDataArray(): ${msg}`); };
  
  const rv = [];

  if (records && Array.isArray(records)) {
    lg(`Converting ${records.length} data record(s).`);

    // iterate records
    records.forEach(
      rec => {
        // generate new user
        const gen = require('./user-def');
        const user = gen.get();

        // populate from data
        user.telegramUsername = rec.telegramUsername;
        user.telegramUsernames = rec.telegramUsernames;
        user.telegramUserId = rec.telegramUserId;
        user.registrationDate = rec.registrationDate;
        user.userId = rec.userId;
        user.profileFirstName = rec.profileFirstName;
        user.profileLastName = rec.profileLastName;
        user.profileName = rec.profileName;
        user.profileBio = rec.profileBio;
        user.profilePhoneNumber = rec.profilePhoneNumber;
        user.profileInfo = rec.profileInfo;
        user.profileMainImage = rec.profileMainImage;
        user.profileImages = rec.profilesImages;
        user.notes = rec.notes;

        // add user object to return array
        rv.push(user);
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
