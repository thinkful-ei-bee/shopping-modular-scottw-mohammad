'use strict';
const Item = (function(){

  const validateName = function(name) {
    if (!name) {
      throw TypeError('Name does not exist');
    }
  };

  return{
    validateName
  };    

}() );