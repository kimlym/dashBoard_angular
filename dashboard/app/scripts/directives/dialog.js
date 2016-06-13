'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog.
// First one is for the "Add" button and the second one is for the "Edit" button
app.directive('addItem',function($mdDialog){
  return{
    template: "<button class='btn btn-danger' ng-click='addItem($event)' ng-controller='addController' >Add Item</button>"
  };
});

app.controller('addController',function($scope,$mdDialog){
  $scope.addItem = function(ev){
    $mdDialog.show({
      templateUrl: "../templates/addDialog.html",
      controller: DialogController,
      parent: angular.element(document.querySelector('#dialogContainer')),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
});

app.controller('dialogAddCtrl',function($scope,$rootScope,$mdDialog){
  $scope.addSingle=function(form,item){
    if(!form.$valid){
      console.log("hello");
      return;
    }
    var id = $rootScope.data.works.length;
    $rootScope.data.works.push({
      id: id,
      title: item.title,
      author: item.author,
      like: item.like,
      comment: item.comment
    });
    $mdDialog.hide();
  };
});

app.directive('editItem',function($mdDialog){
  return{
    template: "<span ng-controller='editController' ng-click='editItem($event,item)'>Edit</span>",
    scope:{
      item: '='
    }
  }
});

app.controller('editController',function($scope,$mdDialog,$rootScope){
  $scope.editItem = function(ev,item){
    $rootScope.tempItem = item;
    $mdDialog.show({
      templateUrl: "../templates/editDialog.html",
      parent: angular.element(document.querySelector('#dialogContainer')),
      controller: DialogController,
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
});

app.controller('dialogEditCtrl',function($scope,$rootScope,$mdDialog){
  $scope.item = $rootScope.tempItem;
  $scope.editSingle=function(form,item){
    if(!form.$valid){
      console.log("hello");
      return;
    }
    var id = $rootScope.data.works.length;
    $mdDialog.hide();
    console.log($scope.item.title);
    console.log($rootScope.tempItem.title);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
