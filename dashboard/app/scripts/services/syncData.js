'use strict';
// DATA SHARE service
// Description: share data between controllers
app.service('workService', function() {
  var workData = [];

  var addWork = function(item) {
    workData.push(item);
  };

  var getWork = function(){
    return workData;
  };

  return {
    addWork: addWork,
    getWork: getWork
  };

});
