'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality:
// making service calls to retrieve the logged-in users' information
app.service('getUser',function($resource){
  var getUser = $resource('/api/getuser/:name',{user:'@name'});
  return getUser;
  // var myuser;
  // var user;
  // this.curUser = function(userName){
  //   return getUser.get({user:userName});
  // };
});
