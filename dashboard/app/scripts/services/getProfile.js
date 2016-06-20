'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile
app.service('getProfile',function($http){
  this.get = function(){
    return $http({
      method: 'GET',
      url: '/api/profile'
    });
  };
});
