'use strict';
// GETCONTACT SERVICE
// Description: Define the contactService that has 2 functionalities: getLocation and getCategory
app.service('getContact',function($http){
  this.getLocation = function(){
    return $http({
      method: 'GET',
      url: '/api/location'
    });
  };

  this.getCategory = function(){
    return $http({
      method: 'GET',
      url: '/api/category'
    });
  }
});
