// 
//  registerUser.js 
//  ~/users/ 
// 
//  created:    05/01/2021 
// 
//  registerNewUser function for id-register.js
// 
'use strict';

const config = require('../config');
const errorhandler = require('../errorhandler');

/**
 * Registers a new user in the reigster.
 * Returns the new user ID.
 * If the user is already registered, the existing user ID is returned.
 * @param  {string} telegramUsername The Telegram @username 
 * @param  {string} telegramUserId The Telegram user ID number
 */
const registerUser = (telegramUsername, telegramUserId) => {

    // check for pre-existence
    const loader = require('./loadRegistrationByTgUserId');
    const exists = loader.loadByTelegramUserId(telegramUserId)   // use TG userid as usernames can be changed
    if (!exists) {

        // generate a new user id
        const gen = require('./id-gen');
        const newId = gen.get();

        // get a reg object
        const idRegistration = require('./idRegistration-def');
        const reg = idRegistration.get();
        reg.telegramUsername = telegramUsername;
        reg.telegramUserId = telegramUserId;
        reg.registrationDate = new Date();
        reg.userId = newId;

        // save it
        const storage = require('../data');
        if (!storage.store(reg, config.users.user_register_data_collection)) {
            // something went wrong.
            errorhandler.handle(new Error(`Problem storing new user registration. UserId:${newId};TelegramId:${telegramUserId};TelegramUsername:${telegramUsername}. Please refer to the log to determine the reason for the failure.`));
        }

        // return the new user id
        return newId;
    }

    // user already registered
    else {

        return exists.userId;
    }
};

module.exports = registerUser;
