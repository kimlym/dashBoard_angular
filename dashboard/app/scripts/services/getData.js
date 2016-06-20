'use strict';
// GETDATA SERVICE
// Description: Set and return required data by controllers
app.service('getData',function(){
  var proData;
  var locationData;
  var categoryData
  this.setProData = function(data){
    proData = data;
  };
  this.getProData = function(){
    return proData;
  };

  this.setLocation = function(data){
    locationData = data;
  };
  this.getLocation = function(){
    return locationData;
  };

  this.setCategory = function(data){
    categoryData = data;
  }
  this.getCategory = function(){
    return categoryData;
  };
});
