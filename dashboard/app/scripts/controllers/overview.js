'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
app.controller('overviewCtrl',['$scope','session','getData',function($scope,session,getData){
  var user = session.getUser();
  var users = getData.getProData();

  if(user.userName == users[0].username){
    $scope.user = users[0];
  }else{
    $scope.user = users[1];
  }
  var sections = [false,false,false];
  $scope.panels = [
    {
      heading: "Work Section",
      content: "This section contains the demonstration for all final products that has been produced in the market"
    },
    {
      heading: "Producer Section",
      content: "This section contains information about the creator of all the works and how to get in touch with them"
    },
    {
      heading: "Work Section",
      content: "This section provides a gateway for users to voice out opinions regarding the application and any other questions or concerns that one might have"
    }
  ];
  $scope.panels.heading = ["Work Section","Producer Section","Contact Section"];
  $scope.panels.content = [,"",""];
}]);
