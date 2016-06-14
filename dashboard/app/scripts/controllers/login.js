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
        getUser.curUser(user).success(function(res){
          login.userLog();
          session.setUser(mydata);
          $rootScope.curUser = res.name;
          $location.path('/root/work');
        });
      }).error(function(){
        console.log(login.islogged());
        alert("Wrong username and password combination");
      });
    }
  };
});
