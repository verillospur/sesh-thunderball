// 
//  idRegistration.js 
//  ~/users/ 
// 
//  created:    05/01/2021 
// 
//  user id registration object
//  
//  this is the "document" in the "usersRegister" collection in noSql db.
// 
'use strict';

const getReg = () => {
    
    return {
        telegramUsername: '@',
        telegramUserId: '0',
        registrationDate: new Date(),
        userId: '0'
    };
};

module.exports = {
  get: getReg
}
