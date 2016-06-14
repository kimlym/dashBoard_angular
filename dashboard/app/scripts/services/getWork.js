'use strict';
// SESSION SERVICE
// Description: Define the workService that has 1 functionality:
// get work from server
app.service('fetchWork',function($http){
  var service={};
  service.getWork = function(){
      return $http({
                method: 'GET',
                url: '/api/work'
      });
  }
  return service;
});
