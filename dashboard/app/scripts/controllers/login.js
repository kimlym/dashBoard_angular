'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
app.controller('loginController',function($scope,$rootScope,$location,login,session,getUser){
  $scope.validateUser = function(user,pwd){
    if($scope.myform.$valid){
      var mydata = {
        "userName":user,
        "password":pwd
      };
      login.authenticate(mydata).success(function(data){
        var current;
        current = getUser.get({user: user},function(){
          $rootScope.curUser = current.name;
          $location.path('/root/work');
        });
        login.userLog();
        session.setUser(mydata);
        $scope.error = false;
      }).error(function(){
        $scope.error = true;
      });
    }
  };
});
