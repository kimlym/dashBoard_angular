'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
app.controller('workCtrl',function($scope,fetchWork,$rootScope){
  fetchWork.getWork().success(function(data){
    $rootScope.data = data;
  });
  $scope.customOrder = function(order){
    if($scope.myOrder != order){
      $scope.myOrder = order;
    }else{
      $scope.myOrder = '-'+order;
    }
  };

  $scope.delCard = function(item){
    var index = $rootScope.data.works.indexOf(item);
    $rootScope.data.works.splice(index,1);
  };

});
