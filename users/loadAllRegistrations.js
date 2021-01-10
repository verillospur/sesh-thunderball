// 
//  loadAllRegistrations.js
//  ~/users/
// 
//  created:    07/01/2021
// 
//  loadAllRegistrations function for id-register.js
// 
'use strict';

const config = require('../config');
const errorhandler = require('../errorhandler');
const log = require('../log');

/**
 * Loads all users registrations.
 * Returns an array of user registration objects.
 */
const loadAll = () => {
  const lg = msg => { log.log(`loadAllUsers(): ${msg}`); };

  // load records
  lg('Running loadAll()');
  const storage = require('../data');
  const records = storage.loadAll(config.users.user_register_data_collection);

  // return value
  let rv = null;

  // check for error
  const err = storage.checkForError(records);
  if (err) {
    lg(`Error: ${err}`);
    errorhandler.handle(err);
    // return empty array
    rv = [];
  }

  // no error
  else {
    lg(`Fetched ${records.length} record(s)`);

    // convert to user objects
    const converter = require('./regsFromData');
    rv = converter.fromDataArray(records);
  }

  // return
  return rv;
};

module.exports = loadAll;
