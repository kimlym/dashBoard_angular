app.service('fetchWork',function($http){
  var service={};
  service.getWork = function(){
      return $http({
                method: 'GET',
                url: '/api/work'
      });
  }
  return service;
});
