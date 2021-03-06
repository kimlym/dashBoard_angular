'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

app.controller('rootCtrl',function($scope,$location,$rootScope,session,login){
  $scope.date = new Date();
  $scope.test = true;
  $scope.active = 0;
  $scope.setTab=function(index){
    $scope.active = index;
  };
  $scope.isSet=function(index){
    return $scope.active === index;
  };
  $scope.logOut = function(){
    login.logOut();
    session.destroy();
    $rootScope.curUser = "";
    $location.path('');
  }
});
