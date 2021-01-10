// 
//  user-def.js
//  ~/users/
// 
//  created:    07/01/2021
// 
//  user object
//  
//  this is the "document" in the "users" collection in noSql db.
// 
// 
'use strict';

const getUser = () => {
    
    return {
        telegramUsername: '@',
        telegramUsernames: [],
        telegramUserId: '0',
        registrationDate: new Date(),
        userId: '0',
        profileFirstName: '', 
        profileLastName: '',
        profileName: '',
        profileBio: '', 
        profilePhoneNumber: '', 
        profileInfo: '',
        profileMainImage: Buffer.alloc(0),
        profileImages: [],
        notes: '',
    };
};

module.exports = {
  get: getUser
}
