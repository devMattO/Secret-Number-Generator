'use strict';
module.exports = function() {
  var secretNumber = Math.random(0,1000000);
  return function(){
    return secretNumber;
  };

};