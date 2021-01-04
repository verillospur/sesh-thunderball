// 
//  app.js 
//  ~/ 
// 
//  created:    03/01/2021 
// 
//  app entry point
// 
'use strict';

const gen = require('./framework/id-generator')
const id = gen.generate(true);

console.log(`id: ${id}`)
