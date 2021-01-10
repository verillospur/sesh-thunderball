// 
//  config.js 
//  ~/config/ 
// 
//  created:    01/01/2021 
// 
//  app-wide configuration 
// 
'use strict';

const config = () => {

    return {
      
        // log
        log: require('../log/config'), 
        
        // mongodb
        mongodb: require('../data/config'), 

        // users
        users: require('../users/config'), 

    };
};

module.exports = config();
