'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality:
// making service calls to retrieve the logged-in users' information
app.service('getUser',function($http){
  var service={};
  service.curUser = function(userName){
    return $http({
              method: 'GET',
              url: '/api/getuser',
              user: userName
    });
  }
  return service;
});
