// 
//  log.js 
//  ~/path/ 
// 
//  created:    05/01/2021 
// 
//  application log
// 
'use strict';

const config = require('../config');

const message = (msg) => {

    // check directory and file 
    const fileman = require('./log-file-manager');
    const filepath = fileman.check();

    // process message
    const processer = require('./message-processor');
    const finalMsg = processer.process(msg);
    
    // write msg 
    const writer = require('../framework/filesystem/append-to-file');
    writer.append(finalMsg, filepath);

};


module.exports = {
  log: message
}
