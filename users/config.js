// 
//  config.js 
//  ~/users/ 
// 
//  created:    05/01/2021 
// 
//  config for users 
// 
'use strict';

const config = () => {
    return {
        
        // id format
        userIdPrefix: 'U-',
        userIdSuffix: '',

        // data info
        user_register_data_collection: 'usersRegister',
        user_data_collection: 'users',
        
    };
};

module.exports = config();
