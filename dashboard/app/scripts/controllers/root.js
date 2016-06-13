'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

app.controller('rootCtrl',function($scope){
  $scope.date = new Date();
  $scope.active = 1;
  $scope.setTab=function(index){
    $scope.active = index;
  };
  $scope.isSet=function(index){
    return $scope.active === index;
  };
});
