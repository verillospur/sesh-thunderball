// 
//  config.js 
//  ~/log/ 
// 
//  created:    05/01/2021 
// 
//  log config
// 
'use strict';

const config = () => {
    return {
        
        // log file
        log_file_dir: 'C:\\Users\\Pete\\Documents\\phone\\sesh\\thunderball\\dev\\sesh-thunderball\\sesh-thunderball\\_logs',
        log_file_name_format: 'yyyyMMdd',
        log_file_name_ext: '.log',
        log_file_path_seperator: '\\',

        // messages
        log_message_prefix_format: 'yyyyMMdd-hhmmss⏩▶',
    };
};

module.exports = config();
