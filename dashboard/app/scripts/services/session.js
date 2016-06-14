'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities:
// get, set, and destroy for users' data in the session storage
app.service('session',function(){
  var user;
  var service = {};
  service.getUser = function(){
    return user;
  }
  service.setUser = function(curUser){
    user = curUser;
  }

  service.destroy = function(){
    user = "";
  }
  return service;
});
