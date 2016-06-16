'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged
app.service('login',function($http,session){
  var service={};
  var logged = false;
  service.authenticate = function(mydata){
      return $http({
                method: 'POST',
                url: '/api/login',
                data: mydata
      });
  }

  service.islogged = function(){
    return logged;
  }

  service.userLog = function(){
    logged = true;
  }

  service.logOut = function(){
    logged = false;
    session.destroy();
  }
  return service;
});
