// 
//  config.js 
//  ~/data/ 
// 
//  created:    04/01/2021 
// 
//  data config
// 
'use strict';

const config = () => {
    return {
        
        MongoDB_db: 'learning-db',
        MongoDB_host: 'localhost',
        MongoDB_port: 27017,
        MongoDB_url: 'mongodb://localhost:27017/learning-db',
        MongoDB_url_nodb: 'mongodb://localhost:27017/'
    };
};

module.exports = config();
