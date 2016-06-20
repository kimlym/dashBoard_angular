'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
app.controller('contactCtrl',function($scope,getData){
  $scope.locations = getData.getLocation().data.locations;
  $scope.categories = getData.getCategory().data.categories;
  $scope.mytime = new Date();
  $scope.rate = 5;
  $scope.max = 10;
  $scope.isReadonly = false;
  $scope.form = {};
  $scope.active = 0;
  $scope.cur = 0;
  $scope.tabs=[
    {
      disable: false
    },
    {
      disable: true
    },
    {
      disable: true
    }
  ];
  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.priority = function(value){
    if(value<=3){
      return "Low";
    }else if(value <= 7){
      return "Medium";
    }else{
      return "High";
    }
  };
  $scope.nextTab = function(){
    $scope.active = $scope.cur;
  };
  $scope.$watch('form.info.$valid',function(newValue,oldValue){
    console.log(newValue);
    if (newValue==true) {
      $scope.tabs[1].disable = false;
      $scope.cur = 1;
    }else{
      $scope.tabs[1].disable = true;
      $scope.cur = 0;
    }
  },true);

  $scope.$watch('form.query.$valid',function(newValue,oldValue){
    console.log(newValue);
    if (newValue==true) {
      $scope.tabs[2].disable = false;
      $scope.cur = 2;
    }else{
      $scope.tabs[2].disable = true;
      $scope.cur = 1;
    }
  },true);



});
