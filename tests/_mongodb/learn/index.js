// 
//  index.js 
//  ~/tests/_mongodb/learn/
// 
//  created:    04/01/2021 
// 
//  Learning MongoDB!
// 
'use strict';

const config = require('../../../config');
const errHandler = require('../../../errorhandler');
const admin = require('../../../admin');


const learning = () => {
    
    const mongo = require('mongodb');
    const client = mongo.MongoClient;
    const url = config.MongoDB_url_nodb;

    // connect 
    client.connect(
        url, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, db) => {
            // error?
            if (err) errHandler.handle(err);
            
            // no error, lets get on with it
            const dbo = db.db(config.mongodb.MongoDB_db);

            admin.logMsg('Database created, apparently.');

            // close database
            db.close();
        }
        );
};


module.exports = {
    learn: learning
};



